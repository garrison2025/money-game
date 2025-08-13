"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isGuidesOpen, setIsGuidesOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2" onClick={closeMobileMenu}>
          <Image src="/favicon-32x32.png" alt="Bloodmoney Game Pro Logo" width={32} height={32} className="h-8 w-8" />
          <div className="font-display text-xl font-bold">
            <span className="blood-text">BLOOD</span>
            <span className="money-text">MONEY</span>
            <span className="text-muted-foreground">.pro</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/" && "bg-accent/50",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/play" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/play" && "bg-accent/50",
                  )}
                >
                  Play Game
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/granny-unblocked" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/granny-unblocked" && "bg-accent/50",
                  )}
                >
                  Granny Unblocked
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/guides/beginners"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Beginner's Guide</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Master resource management and survival basics
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/guides/advanced"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Advanced Strategy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Customize abilities and perfect your combat build
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/about" && "bg-accent/50",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="bg-primary hover:bg-primary/90 hidden sm:flex">
            <Link href="/play">PLAY NOW</Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <div className="container grid gap-6 p-6">
            <nav className="grid gap-4">
              <Link
                href="/"
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/" && "text-primary",
                )}
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link
                href="/play"
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/play" && "text-primary",
                )}
                onClick={closeMobileMenu}
              >
                Play Game
              </Link>

              <Link
                href="/granny-unblocked"
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/granny-unblocked" && "text-primary",
                )}
                onClick={closeMobileMenu}
              >
                Granny Unblocked
              </Link>

              <div className="space-y-2">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                >
                  Guides
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isGuidesOpen && "rotate-180")} />
                </button>

                {isGuidesOpen && (
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/guides/beginners"
                      className={cn(
                        "block text-base text-muted-foreground transition-colors hover:text-primary",
                        pathname === "/guides/beginners" && "text-primary",
                      )}
                      onClick={closeMobileMenu}
                    >
                      Beginner's Guide
                    </Link>
                    <Link
                      href="/guides/advanced"
                      className={cn(
                        "block text-base text-muted-foreground transition-colors hover:text-primary",
                        pathname === "/guides/advanced" && "text-primary",
                      )}
                      onClick={closeMobileMenu}
                    >
                      Advanced Strategy
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/about" && "text-primary",
                )}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </nav>

            <div className="border-t pt-6">
              <Button asChild className="w-full bg-primary hover:bg-primary/90" onClick={closeMobileMenu}>
                <Link href="/play">PLAY NOW</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
