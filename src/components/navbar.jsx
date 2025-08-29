"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img src="/peerlogo.png" alt="Peer Flow Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold ">Peer Flow</span>
          </div>

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
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <Link href="/signup">Signup →</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
