"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = (type: "all" | "essential") => {
    localStorage.setItem("cookie-consent", type)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:right-8 md:max-w-md"
        >
          <div className="bg-foreground text-background p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-secondary/20 p-2 rounded-lg">
                <Cookie className="h-6 w-6 text-secondary" />
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <h3 className="text-lg font-serif font-bold text-white mb-2">Cookie Preferences</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We use cookies to enhance your experience and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of all cookies. You can read more in our{" "}
              <Link href="/privacy" className="text-secondary hover:underline">
                Privacy Policy
              </Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="secondary" 
                className="flex-1 text-primary font-bold"
                onClick={() => handleAccept("all")}
              >
                Accept All
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/5"
                onClick={() => handleAccept("essential")}
              >
                Essential Only
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
