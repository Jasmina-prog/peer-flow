"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const observerRef = useRef(null)

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
    elements.forEach((el) => observerRef.current && observerRef.current.observe(el))

    return () => observerRef.current && observerRef.current.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Modern gradient background with floating elements */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card pt-20 sm:pt-24 md:pt-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-500/15 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute top-32 sm:top-40 right-4 sm:right-20 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 bg-green-400/25 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 sm:bottom-32 left-1/4 w-56 sm:w-72 md:w-96 lg:w-[28rem] h-56 sm:h-72 md:h-96 lg:h-[28rem] bg-green-300/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-emerald-400/20 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-8 sm:right-16 w-36 sm:w-52 md:w-68 lg:w-72 h-36 sm:h-52 md:h-68 lg:h-72 bg-green-600/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in-up mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent mb-2 sm:mb-4 md:mb-6 leading-tight">
                Connect
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-green-500 to-green-400 bg-clip-text text-transparent mb-2 sm:mb-4 md:mb-6 leading-tight">
                Collaborate
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-12 leading-tight">
                Focus
              </h1>
            </div>

            <div className="fade-in-up mb-6 sm:mb-8 md:mb-12" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                Join thousands of developers in collaborative coding sessions, focus rooms, and skill-building
                challenges.
              </p>
            </div>

            <div
              className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center px-4"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg animate-pulse-glow w-full sm:w-auto"
              >
                Start Collaborating
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
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

      {/* Features Section - Enhanced with visual mockups */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 sm:mb-6">
              How It Works
            </h2>
            <p
              className="fade-in-up text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
              style={{ animationDelay: "0.1s" }}
            >
              Three simple steps to transform your coding journey
            </p>
          </div>

          {/* Step 1: Match */}
          <div className="fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Match</h3>
                <p className="text-lg text-muted-foreground mb-6">Find your perfect coding partner</p>

                {/* Developer profiles mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Nilufar", lang: "JavaScript", level: "Intermediate" },
                    { name: "Mukhlisa", lang: "Swift", level: "Beginner" },
                    { name: "Jamshid", lang: "Python", level: "Beginner" },
                    { name: "Sherzod", lang: "Swift", level: "Beginner" },
                  ].map((dev, i) => (
                    <div
                      key={i}
                      className="bg-background border border-border rounded-xl p-4 hover:border-green-400/50 transition-colors"
                    >
                      <div className="font-semibold text-foreground mb-1">{dev.name}</div>
                      <div className="text-sm text-muted-foreground mb-2">{dev.lang}</div>
                      <div className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full inline-block mb-3">
                        {dev.level}
                      </div>
                      <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-black text-xs">
                        Send Invite
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="text-6xl sm:text-8xl font-black text-green-500/20 mb-4">01</div>
              <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Match with Your Peer</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our smart algorithm matches you with developers who share your interests, skill level, and learning
                goals. Browse profiles and connect with your ideal coding partner.
              </p>
            </div>
          </div>

          {/* Step 2: Plan */}
          <div
            className="fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center lg:text-left">
              <div className="text-6xl sm:text-8xl font-black text-green-500/20 mb-4">02</div>
              <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">AI-Built Learning Plan</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get a personalized 21-day learning plan created by AI, tailored to both you and your partner's goals.
                Track progress together and stay motivated.
              </p>
            </div>

            <div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Plan</h3>
                <p className="text-lg text-muted-foreground mb-6">AI-built 21-day plan you both follow</p>

                {/* Learning plan mockup */}
                <div className="bg-green-500 text-black rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">21-Day Plan</span>
                    <span className="text-sm opacity-80">7/21 days</span>
                  </div>
                  <div className="w-full bg-green-400 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { day: "Day 1", topic: "Lists" },
                    { day: "Day 2", topic: "Dictionary" },
                    { day: "Day 3", topic: "JSON files" },
                    { day: "Day 4", topic: "for, while loops" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.topic}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent">
                    Edit tasks
                  </Button>
                  <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600 text-black text-xs">
                    Generate plan
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Focus */}
          <div
            className="fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Focus</h3>
                <p className="text-lg text-muted-foreground mb-6">Make Study with me sessions</p>

                {/* Video call mockup */}
                <div className="bg-background border border-border rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Peer Flow</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Study-With-Me session</div>
                  </div>

                  <div className="bg-muted rounded-lg p-8 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5"></div>
                    <div className="relative flex justify-center items-center">
                      <div className="text-4xl">👨‍💻👩‍💻</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-muted-foreground">Next session:</div>
                      <div className="font-medium">Sat, 19:00</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Meeting with:</div>
                      <div className="font-medium text-green-400">Akmaljon (Python)</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Session Notes</div>
                  <div className="text-xs text-muted-foreground bg-muted rounded p-3">
                    • Review functions and loops chapter
                    <br />• Work on project task list
                    <br />• Practice debugging techniques
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="text-6xl sm:text-8xl font-black text-green-500/20 mb-4">03</div>
              <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Focus Sessions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join virtual study rooms with your coding partner. Share screens, work together on projects, and stay
                accountable with structured focus sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Modern comparison layout */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
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

      {/* Community Section - Stats showcase */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in-up mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 sm:mb-6">
              Join Our Community
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Thousands of developers are already collaborating and growing together
            </p>
          </div>

          <div
            className="fade-in-scale mb-8 sm:mb-12 bg-card/50 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-xl shadow-black/5 dark:shadow-none border border-border/50"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-green-500 mb-4 sm:mb-6 animate-pulse-glow px-4 leading-none">
              523,000
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">Developers Connected</p>
          </div>

          <div className="fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl animate-pulse-glow w-full sm:w-auto"
            >
              Find Your Coding Partner
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Improved layout */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
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
