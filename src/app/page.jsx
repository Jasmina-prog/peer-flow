"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const observerRef = useRef

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-up, .fade-in-scale")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero  */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-10 w-72 h-44 bg-green-600/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute top-20 -right-50 w-99 h-80 bg-green-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-30 -left-30 w-1/5 h-1/4 bg-green-800/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          {/* <div
            className="absolute bottom-8 right-50 w-96 h-96 bg-green-700/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div> */}
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in-up mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Connect
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-green-500 to-green-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Collaborate
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent mb-8 sm:mb-12 leading-tight">
                Focus
              </h1>
            </div>

            <div className="fade-in-up mb-8 sm:mb-12" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                Join thousands of developers in collaborative coding sessions, focus rooms, and skill-building
                challenges.
              </p>
            </div>

            <div
              className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 sm:px-8 py-7 sm:py-6 text-base sm:text-lg animate-pulse-glow w-full sm:w-auto"
              >
                Start Collaborating
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-6 sm:px-8 py-7 sm:py-6 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* how it works ? */}
      <section className="py-16 sm:py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 sm:mb-6">
              How It Works
            </h2>
            <p
              className="fade-in-up text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
              style={{ animationDelay: "0.1s" }}
            >
              Four simple steps to start your collaborative coding journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Peer Matching",
                desc: "Get matched with compatible developers based on your skills and goals",
              },
              {
                number: "02",
                title: "Focus Rooms",
                desc: "Join dedicated spaces for distraction-free coding sessions",
              },
              {
                number: "03",
                title: "Progress Tracking",
                desc: "Monitor your growth with detailed analytics and milestones",
              },
              {
                number: "04",
                title: "Skill Tests",
                desc: "Challenge yourself with curated coding problems and assessments",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="fade-in-scale group bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 shadow-lg shadow-black/5 dark:shadow-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-6xl font-black text-green-500/20 mb-4 group-hover:text-green-500/40 transition-colors">
                  {feature.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 sm:mb-6">
              Plans & Pricing
            </h2>
            <p className="fade-in-up text-lg sm:text-xl text-muted-foreground px-4" style={{ animationDelay: "0.1s" }}>
              Choose the plan that fits your coding journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="fade-in-scale bg-card border border-border rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-black/5 dark:shadow-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">Free</h3>
                <p className="text-muted-foreground mb-6 sm:mb-8">Perfect for getting started</p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">Up to 3 matches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">2 hours per day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">Community support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-muted-foreground">Display ads</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                >
                  Get Started Free
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div
              className="fade-in-scale bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-green-500/10"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                Popular
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">Pro</h3>
                <p className="text-muted-foreground mb-6 sm:mb-8">For serious developers</p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">Unlimited matches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">Unlimited session time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground">Ad-free experience</span>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold animate-pulse-glow">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community  */}
      <section className="py-16 sm:py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-up mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 sm:mb-6">
              Join Our Community
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Thousands of developers are already collaborating and growing together
            </p>
          </div>

          <div
            className="fade-in-scale mb-8 sm:mb-12 bg-card/50 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-xl shadow-black/5 dark:shadow-none border border-border/50"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-green-500 mb-4 sm:mb-6 animate-pulse-glow px-4 py-7  leading-none">
              523,000
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">Developers Connected</p>
          </div>

          <div className="fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl animate-pulse-glow w-full sm:w-auto"
            >
              Find Your Coding Partner
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Improved layout */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                q: "How does the matching system work?",
                a: "We use a simple questionnaire covering time zone, language preferences, and coding goals to pair you with compatible partners automatically.",
              },
              {
                q: "What kind of tasks are in the challenges?",
                a: "Daily micro-projects, quizzes, and pair programming prompts targeting real-world skills in Python, JavaScript, and more.",
              },
              {
                q: "What if I don't get along with my coding buddy?",
                a: "You can request a rematch at any time—no questions asked. We want you to have the best collaborative experience.",
              },
              {
                q: "How do I get started?",
                a: "Click 'Start Collaborating' and you'll be guided through our quick onboarding flow to find your perfect coding partner.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="fade-in-up group bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 shadow-lg shadow-black/5 dark:shadow-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-green-400 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}
