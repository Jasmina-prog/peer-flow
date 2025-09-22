"use client"

import { useState } from "react"
import { Check, Video, Save } from "lucide-react"

export default function StreakVariant1() {
  const [completedDays, setCompletedDays] = useState(new Set([1, 3, 5]))

  const toggleDay = (day) => {
    const newCompleted = new Set(completedDays)
    if (newCompleted.has(day)) {
      newCompleted.delete(day)
    } else {
      newCompleted.add(day)
    }
    setCompletedDays(newCompleted)
  }

  const days = [
    {
      day: 1,
      title: "Variables & Data Types",
      description: "Learn about JavaScript variables, strings, numbers, and booleans",
    },
    {
      day: 2,
      title: "Functions Basics",
      description: "Understanding function declarations, parameters, and return values",
    },
    { day: 3, title: "Arrays & Objects", description: "Working with arrays and object data structures" },
    { day: 4, title: "Loops & Iteration", description: "For loops, while loops, and array iteration methods" },
    { day: 5, title: "Conditionals", description: "If statements, switch cases, and logical operators" },
    { day: 6, title: "DOM Manipulation", description: "Selecting and modifying HTML elements with JavaScript" },
    { day: 7, title: "Event Handling", description: "Click events, form events, and event listeners" },
    { day: 8, title: "Async JavaScript", description: "Promises, async/await, and handling API calls" },
    { day: 9, title: "Error Handling", description: "Try/catch blocks and debugging techniques" },
    { day: 10, title: "ES6+ Features", description: "Arrow functions, destructuring, and template literals" },
    { day: 11, title: "Modules", description: "Import/export and organizing code into modules" },
    { day: 12, title: "Local Storage", description: "Storing and retrieving data in the browser" },
    { day: 13, title: "Fetch API", description: "Making HTTP requests and handling responses" },
    { day: 14, title: "JSON Handling", description: "Parsing and stringifying JSON data" },
    { day: 15, title: "Regular Expressions", description: "Pattern matching and text validation" },
    { day: 16, title: "Classes & OOP", description: "Object-oriented programming concepts" },
    { day: 17, title: "Closures", description: "Understanding scope and closure patterns" },
    { day: 18, title: "Prototypes", description: "JavaScript prototype chain and inheritance" },
    { day: 19, title: "Testing Basics", description: "Writing unit tests and debugging code" },
    { day: 20, title: "Performance", description: "Optimizing JavaScript code performance" },
    { day: 21, title: "Final Project", description: "Build a complete JavaScript application" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">21-Day JavaScript Challenge</h1>
              <p className="text-muted-foreground mt-1">Master JavaScript fundamentals in 21 days</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Partner:</p>
                <p className="text-sm font-medium">
                  Not matched yet <span className="text-green-500 cursor-pointer hover:underline">Change</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Progress</p>
                <p className="text-2xl font-bold text-green-500">{completedDays.size}/21</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              <Video size={20} />
              Join Video Room
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
              <Save size={20} />
              Save Progress
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-muted rounded-full h-3 mb-8">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(completedDays.size / 21) * 100}%` }}
          />
        </div>

        {/* Weeks (3 x 7 days) */}
        {Array.from({ length: 3 }, (_, wi) => wi).map((weekIndex) => {
          const start = weekIndex * 7
          const weekDays = days.slice(start, start + 7)
          const weekCompleted = weekDays.filter((d) => completedDays.has(d.day)).length
          return (
            <div key={`week-${weekIndex}`} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Week {weekIndex + 1}</h2>
                <div className="flex items-center gap-3 min-w-[180px]">
                  <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${(weekCompleted / 7) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">{weekCompleted}/7</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {weekDays.map((item) => {
                  const isCompleted = completedDays.has(item.day)
                  return (
                    <div
                      key={item.day}
                      onClick={() => toggleDay(item.day)}
                      className={`
                        relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105
                        ${
                          isCompleted
                            ? "border-green-500 bg-green-50 dark:bg-green-950/20 shadow-lg shadow-green-500/20"
                            : "border-border hover:border-green-300 bg-card hover:bg-accent"
                        }
                      `}
                    >
                      {/* Day Number */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`
                          w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                          ${isCompleted ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}
                        `}
                        >
                          {isCompleted ? <Check size={16} /> : item.day}
                        </div>
                        {isCompleted && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />}
                      </div>

                      {/* Content */}
                      <h3
                        className={`font-semibold mb-2 ${isCompleted ? "text-green-700 dark:text-green-300" : "text-foreground"}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm ${isCompleted ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
                      >
                        {item.description}
                      </p>

                      {/* Completion Overlay */}
                      {isCompleted && <div className="absolute inset-0 bg-green-500/10 rounded-xl pointer-events-none" />}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-3xl font-bold text-green-500 mb-2">{completedDays.size}</div>
            <div className="text-muted-foreground">Days Completed</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-3xl font-bold text-blue-500 mb-2">{21 - completedDays.size}</div>
            <div className="text-muted-foreground">Days Remaining</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border">
            <div className="text-3xl font-bold text-purple-500 mb-2">
              {Math.round((completedDays.size / 21) * 100)}%
            </div>
            <div className="text-muted-foreground">Progress</div>
          </div>
        </div>
      </div>
    </div>
  )
}
