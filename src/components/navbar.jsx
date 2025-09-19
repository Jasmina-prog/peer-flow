"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs"

export function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <a href="/" className="flex items-center space-x-3">
            <img src="/Logo.svg" alt="Peer Flow Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold ">Peer Flow</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/overview"
              className="text-foreground hover:text-green-500 transition-colors border-b-2 border-green-500 pb-1"
            >
              Overview
            </Link>
            <Link href="/plans" className="text-muted-foreground hover:text-foreground transition-colors">
              Plans & Prices
            </Link>
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
              F.A.Q
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <SignedOut>
              <SignInButton mode="modal" appearance={{
                elements: {
                  footer: { display: "none" },
                },
              }}>
                <Button variant="outline" className="border-green-500 dark:border-green-500 px-7 rounded-none" >
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal"
                appearance={{
                  elements: {
                    card: "bg-gray-900 text-white shadow-lg rounded-2xl",
                    formButtonPrimary: "bg-green-500 hover:bg-green-600 text-white",
                    footer: { display: "none" },
                  },
                }}>
                <Button variant="outline" className="border-green-500 dark:border-green-500 px-7 rounded-none" >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
                <Link href="/user-profile">Profile</Link>
              <SignOutButton mode="modal">
                <Button variant="outline" className="border-green-500 dark:border-green-500 px-7 rounded-none" >
                  Sign out
                </Button>
              </SignOutButton>
            </SignedIn>

          </div>
        </div>
      </div>
    </nav>
  )
}
