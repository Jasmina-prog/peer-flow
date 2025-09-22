import Stripe from "stripe"

export async function POST(req) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ error: "Missing STRIPE_SECRET_KEY" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" })

    const origin = req.headers.get("origin") || req.headers.get("referer") || "http://localhost:3000"

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Peer Flow Pro" },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?checkout=cancelled`,
      allow_promotion_codes: true,
    })

    return new Response(
      JSON.stringify({ id: session.id }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    console.error("Stripe session error", error)
    return new Response(
      JSON.stringify({ error: "Failed to create checkout session" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}


