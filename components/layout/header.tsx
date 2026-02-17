"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isDarkHero = pathname === "/" || 
                     pathname === "/about" || 
                     pathname === "/contact" || 
                     (pathname.startsWith("/projects/") && pathname !== "/projects")

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <img 
            src="/logo.svg" 
            alt="Fineworks.uk" 
            className={cn(
              "h-8 md:h-10 w-auto transition-all",
              !isScrolled && isDarkHero ? "brightness-0 invert" : ""
            )} 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                pathname === item.href
                  ? "text-secondary"
                  : (isScrolled || !isDarkHero ? "text-foreground/80" : "text-white/90")
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant={isScrolled || !isDarkHero ? "default" : "secondary"} className="ml-4">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden z-50 relative p-2 transition-colors",
            isScrolled || !isDarkHero ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center space-y-8"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-3xl font-serif font-medium transition-colors hover:text-secondary",
                    pathname === item.href ? "text-secondary" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
