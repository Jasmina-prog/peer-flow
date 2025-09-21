"use client"

import { useState } from "react"
import { Check, Video, Save, ChevronDown, ChevronUp } from "lucide-react"

export default function StreakVariant2() {
  const [completedDays, setCompletedDays] = useState(new Set([1, 3, 5, 8]))
  const [expandedWeeks, setExpandedWeeks] = useState(new Set([1, 2, 3]))

  const toggleDay = (day) => {
    const newCompleted = new Set(completedDays)
    if (newCompleted.has(day)) {
      newCompleted.delete(day)
    } else {
      newCompleted.add(day)
    }
    setCompletedDays(newCompleted)
  }

  const toggleWeek = (week) => {
    const newExpanded = new Set(expandedWeeks)
    if (newExpanded.has(week)) {
      newExpanded.delete(week)
    } else {
      newExpanded.add(week)
    }
    setExpandedWeeks(newExpanded)
  }

  const weeks = [
    {
      week: 1,
      title: "JavaScript Fundamentals",
      days: [
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
      ],
    },
    {
      week: 2,
      title: "Advanced Concepts",
      days: [
        { day: 8, title: "Async JavaScript", description: "Promises, async/await, and handling API calls" },
        { day: 9, title: "Error Handling", description: "Try/catch blocks and debugging techniques" },
        { day: 10, title: "ES6+ Features", description: "Arrow functions, destructuring, and template literals" },
        { day: 11, title: "Modules", description: "Import/export and organizing code into modules" },
        { day: 12, title: "Local Storage", description: "Storing and retrieving data in the browser" },
        { day: 13, title: "Fetch API", description: "Making HTTP requests and handling responses" },
        { day: 14, title: "JSON Handling", description: "Parsing and stringifying JSON data" },
      ],
    },
    {
      week: 3,
      title: "Mastery & Projects",
      days: [
        { day: 15, title: "Regular Expressions", description: "Pattern matching and text validation" },
        { day: 16, title: "Classes & OOP", description: "Object-oriented programming concepts" },
        { day: 17, title: "Closures", description: "Understanding scope and closure patterns" },
        { day: 18, title: "Prototypes", description: "JavaScript prototype chain and inheritance" },
        { day: 19, title: "Testing Basics", description: "Writing unit tests and debugging code" },
        { day: 20, title: "Performance", description: "Optimizing JavaScript code performance" },
        { day: 21, title: "Final Project", description: "Build a complete JavaScript application" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">21-Day Challenge</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-muted-foreground">Partner:</p>
                <p className="text-sm font-medium">
                  Not matched yet <span className="text-green-500 cursor-pointer hover:underline">Change</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Progress</p>
                <p className="text-xl font-bold text-green-500">{completedDays.size}/21</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
              <Video size={16} />
              <span className="hidden sm:inline">Join Video Room</span>
              <span className="sm:hidden">Join</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-sm">
              <Save size={16} />
              <span className="hidden sm:inline">Save Progress</span>
              <span className="sm:hidden">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-muted rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(completedDays.size / 21) * 100}%` }}
          />
        </div>

        {/* Week Cards */}
        <div className="space-y-6">
          {weeks.map((week) => {
            const weekCompleted = week.days.filter((day) => completedDays.has(day.day)).length
            const isExpanded = expandedWeeks.has(week.week)

            return (
              <div key={week.week} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                {/* Week Header */}
                <div
                  onClick={() => toggleWeek(week.week)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-muted-foreground">Week {week.week}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{week.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {weekCompleted}/{week.days.length} completed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all duration-300"
                        style={{ width: `${(weekCompleted / week.days.length) * 100}%` }}
                      />
                    </div>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Week Content */}
                {isExpanded && (
                  <div className="border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                      {week.days.map((day) => {
                        const isCompleted = completedDays.has(day.day)
                        return (
                          <div
                            key={day.day}
                            onClick={() => toggleDay(day.day)}
                            className={`
                              p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-[1.02]
                              ${
                                isCompleted
                                  ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                                  : "border-border hover:border-green-300 bg-background hover:bg-accent"
                              }
                            `}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`
                                w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                ${isCompleted ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}
                              `}
                              >
                                {isCompleted ? <Check size={12} /> : day.day}
                              </div>
                              <h4
                                className={`font-medium text-sm ${isCompleted ? "text-green-700 dark:text-green-300" : "text-foreground"}`}
                              >
                                {day.title}
                              </h4>
                            </div>
                            <p
                              className={`text-xs ${isCompleted ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
                            >
                              {day.description}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
