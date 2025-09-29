"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/find-peer", label: "Find a Peer" },
    { href: "/streakv1", label: "Streak" },
    { href: "/features", label: "Features" },
  ]

  const isActive = (href) => {
    if (href === "/") return pathname === "/"
    return pathname && pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" prefetch={false} className="flex items-center space-x-3">
            <img src="/Logo.svg" alt="Peer Flow Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold">Peer Flow</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`relative text-sm font-medium transition-all duration-300 pb-1 ${
                  isActive(link.href)
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-green-300"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform transition-transform duration-300 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <SignedOut>
              <SignInButton
                mode="modal"
                appearance={{
                  elements: { footer: { display: "none" } },
                }}
              >
                <Button
                  variant="outline"
                  className="border-green-500 dark:border-green-500 px-7 rounded-none"
                >
                  Login
                </Button>
              </SignInButton>

              <SignUpButton
                mode="modal"
                appearance={{
                  elements: {
                    card: "bg-gray-900 text-white shadow-lg rounded-2xl",
                    formButtonPrimary: "bg-green-500 hover:bg-green-600 text-white",
                    footer: { display: "none" },
                  },
                }}
              >
                <Button
                  variant="outline"
                  className="border-green-500 dark:border-green-500 px-7 rounded-none"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link href="/user-profile" className="text-sm font-medium hover:text-green-500">
                Profile
              </Link>
              <SignOutButton mode="modal">
                <Button
                  variant="outline"
                  className="border-green-500 dark:border-green-500 px-7 rounded-none"
                >
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
