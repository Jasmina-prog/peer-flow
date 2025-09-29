import Stripe from "stripe";

export async function POST(req) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return new Response(JSON.stringify({ error: "Missing STRIPE_SECRET_KEY" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Peer Flow Pro",
              description: "Unlock unlimited matches and session time",
            },
            unit_amount: 999, // $9.99
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}?checkout=success`,
      cancel_url: `${origin}?checkout=cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Stripe error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}


