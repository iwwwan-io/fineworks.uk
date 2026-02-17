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

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isDarkHero = pathname === "/" || 
                     pathname === "/about" || 
                     pathname === "/contact" || 
                     (pathname.startsWith("/projects/") && pathname !== "/projects")

  // Animation variants
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as any
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as any
      }
    }
  }

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 40,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as any
      }
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 + i * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] as any
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        delay: i * 0.05,
        ease: "easeIn" as any
      }
    })
  }

  const headerVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      backdropFilter: "blur(0px)",
      borderBottomColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 #0000",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
    },
    scrolled: {
      backgroundColor: "hsl(var(--background) / 0.85)",
      paddingTop: "0.85rem",
      paddingBottom: "0.85rem",
      backdropFilter: "blur(16px)",
      borderBottomColor: "hsl(var(--border) / 0.5)",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
    },
    open: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
      backdropFilter: "blur(0px)",
      borderBottomColor: "hsl(var(--border) / 0.5)",
      boxShadow: "0 0 #0000",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
    }
  }

  return (
    <motion.header
      initial="top"
      animate={isOpen ? "open" : (isScrolled ? "scrolled" : "top")}
      variants={headerVariants}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="relative">
          <motion.img 
            src="/logo.svg" 
            alt="Fineworks.uk" 
            animate={{ 
              scale: isOpen ? 0.95 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className={cn(
              "h-8 md:h-10 w-auto transition-all duration-500",
              isOpen ? "" : (!isScrolled && isDarkHero ? "brightness-0 invert" : "")
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
                "group relative text-sm font-medium transition-colors py-1",
                pathname === item.href
                  ? "text-secondary"
                  : (isScrolled || !isDarkHero ? "text-foreground/80 hover:text-secondary" : "text-white/90 hover:text-white")
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300",
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <Button asChild variant={isScrolled || !isDarkHero ? "default" : "secondary"} className="ml-4">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors duration-300",
            isOpen ? "text-primary" : (isScrolled || !isDarkHero ? "text-foreground" : "text-white")
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1 : 1 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-white md:hidden overflow-hidden flex flex-col h-screen"
          >
            <div className="flex flex-col w-full h-full p-6 overflow-y-auto">
              {/* Mobile Overlay Header */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/logo.svg" alt="Fineworks.uk" className="h-8 w-auto" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-primary"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-5xl font-serif font-medium transition-colors hover:text-secondary py-3 block leading-tight",
                        pathname === item.href ? "text-secondary" : "text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full max-w-sm"
                >
                  <Button asChild size="lg" className="w-full h-16 text-lg rounded-full">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>

                {/* Mobile Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-col space-y-6"
                >
                  <div className="h-px w-full bg-primary/10" />
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Contact</p>
                      <p className="text-sm font-medium text-primary">hello@fineworks.uk</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Services</p>
                      <p className="text-sm font-medium text-primary">Bespoke Construction</p>
                    </div>
                  </div>
                  <p className="text-xs text-primary/60">© 2026 Fineworks.uk Ltd. All rights reserved.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
