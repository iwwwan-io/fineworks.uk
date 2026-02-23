"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const MotionImage = motion(Image)


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
                     pathname === "/privacy" || 
                     pathname === "/terms" || 
                     (pathname.startsWith("/projects/") && pathname !== "/projects")


  // Animation variants
  const menuVariants: Variants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const itemVariants: Variants = {
    closed: { 
      opacity: 0, 
      y: 40,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 + i * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        delay: i * 0.05,
        ease: "easeIn"
      }
    })
  }

  const headerVariants: Variants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      backdropFilter: "blur(0px)",
      borderBottomColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 #0000",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    },
    scrolled: {
      backgroundColor: "hsl(var(--background) / 0.85)",
      paddingTop: "0.85rem",
      paddingBottom: "0.85rem",
      backdropFilter: "blur(16px)",
      borderBottomColor: "hsl(var(--border) / 0.5)",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
      backdropFilter: "blur(0px)",
      borderBottomColor: "hsl(var(--border) / 0.5)",
      boxShadow: "0 0 #0000",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
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
          <MotionImage 
            src="/logo.svg" 
            alt="Fineworks.uk" 
            width={160}
            height={40}
            priority
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
            className="fixed inset-0 z-[60] bg-[#0A0A0A] md:hidden overflow-hidden flex flex-col h-screen"
          >
            <div className="flex flex-col w-full h-full relative">
              {/* Decorative Background Text/Pattern */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
                <span className="text-[20vh] font-serif font-bold whitespace-nowrap">FINEWORKS</span>
              </div>

              {/* Mobile Overlay Header */}
              <div className="flex items-center justify-between p-6 relative z-10 border-b border-white/5">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="/logo.svg" 
                    alt="Fineworks.uk" 
                    width={120}
                    height={32}
                    className="h-8 w-auto brightness-0 invert" 
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>

              <div className="flex-1 flex flex-col p-6 overflow-y-auto relative z-10">
                <div className="grid grid-cols-1 gap-12 mt-4">
                  {/* Main Navigation links */}
                  <nav className="flex flex-col space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-4 pl-1">Navigation</p>
                    {navigation.map((item, i) => (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "text-4xl xs:text-5xl font-serif font-medium transition-all duration-500 hover:pl-4 flex items-center gap-4",
                            pathname === item.href ? "text-secondary" : "text-white"
                          )}
                        >
                          <span className="text-sm font-serif italic text-white/20">0{i + 1}</span>
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Services Quick Access */}
                  <nav className="flex flex-col space-y-3 pt-6 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-2 pl-1">Specialisms</p>
                    {[
                      { name: "Residential", href: "/services#residential" },
                      { name: "Commercial Fit-Out", href: "/services#commercial" },
                      { name: "Project Management", href: "/services#project-management" },
                      { name: "Marine Fit-Out", href: "/services#marine" },
                    ].map((service, i) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Link 
                          href={service.href} 
                          className="text-lg text-white/40 hover:text-secondary transition-colors font-light flex items-center justify-between group"
                        >
                          {service.name}
                          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="mt-auto pt-12">
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-3"
                    >
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white/20">Email Us</p>
                      <a href="mailto:info@fineworks.uk" className="text-sm font-light text-white/60 hover:text-white transition-colors">info@fineworks.uk</a>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="space-y-3"
                    >
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white/20">Call Us</p>
                      <a href="tel:+447512649216" className="text-sm font-light text-white/60 hover:text-white transition-colors">+44 7512 649216</a>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-px w-full bg-white/10 origin-left mb-8"
                  />

                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/20 font-bold">
                    <p>© 2026 FINEWORKS Ltd</p>
                    <div className="flex gap-4">
                      <a href="#" className="hover:text-secondary transition-colors">IG</a>
                      <a href="#" className="hover:text-secondary transition-colors">LI</a>
                      <a href="#" className="hover:text-secondary transition-colors">FB</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}
