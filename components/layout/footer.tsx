import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-white overflow-hidden">
      {/* Pre-footer: Luxury CTA */}
      <div className="relative border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Ready to transform <br className="hidden md:block" />
                <span className="text-secondary/80">your architectural vision?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light max-w-xl">
                Experience the precision and craftsmanship that defines Fineworks.uk. Let&apos;s discuss your next project.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-semibold transition-all hover:bg-secondary hover:text-white overflow-hidden shadow-2xl"
            >
              <span className="relative z-10">Start Your Consultation</span>
              <div className="bg-secondary p-1 rounded-full text-white group-hover:bg-white group-hover:text-secondary transition-colors">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Identity */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <Image 
                src="/logo.svg" 
                alt="Fineworks.uk" 
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-white/50 text-base leading-relaxed font-light">
              Crafting excellence in high-end construction and marine environments. Precision in every detail, integrity in every relationship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all text-white/40"><Instagram size={18} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all text-white/40"><Linkedin size={18} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all text-white/40"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Column 2: Specialisms */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-8 relative inline-block">
              Specialisms
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-secondary" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Residential Construction", href: "/services#residential" },
                { name: "Extensions & Renovations", href: "/services#extensions" },
                { name: "Commercial Fit-Out", href: "/services#commercial" },
                { name: "Project Management", href: "/services#project-management" },
                { name: "Marine & Yacht Fit-Out", href: "/services#marine" },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="group flex items-center text-white/50 hover:text-white transition-colors text-[15px] font-light"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-secondary">•</span>
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-8 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-secondary" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Our Story", href: "/about" },
                { name: "Portfolio", href: "/projects" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="group flex items-center text-white/50 hover:text-white transition-colors text-[15px] font-light"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-secondary">•</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Out */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-8 relative inline-block">
              Reach Out
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-secondary" />
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-1">Email Us</span>
                  <a href="mailto:info@fineworks.uk" className="text-white/60 hover:text-white transition-colors break-all">info@fineworks.uk</a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-1">Call Us</span>
                  <a href="tel:+447512649216" className="text-white/60 hover:text-white transition-colors">+44 7512 649216</a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-1">Our Office</span>
                  <address className="not-italic text-white/60 text-sm leading-relaxed">
                    Blisworth, Northampton<br />United Kingdom
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Base Tier: Legal & Credits */}
      <div className="pt-12 pb-16 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="space-y-1 text-xs text-white/30 uppercase tracking-tighter sm:tracking-normal">
                <p>FINEWORKS Ltd is registered in England and Wales (Company No: 17044028)</p>
                <p>Registered Office: Unit 29, J B J Business Park Northampton Road, Blisworth, Northampton, United Kingdom, NN7 3DW</p>
              </div>
              <p className="text-white/40 text-xs">
                &copy; {currentYear} FINEWORKS Ltd. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row lg:justify-end items-center gap-6 md:gap-12 text-xs text-white/30">
              <div className="flex gap-8">
                <Link href="/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms of Service</Link>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
                <span>Website design</span>
                <a href="https://str8.one" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors font-bold tracking-widest">STR8.ONE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

