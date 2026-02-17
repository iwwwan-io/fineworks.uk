import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logo.svg" alt="Fineworks.uk" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Bespoke construction and renovation services providing premium quality and exceptional attention to detail.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">Residential Construction</li>
              <li className="text-white/60 text-sm">Extensions & Renovations</li>
              <li className="text-white/60 text-sm">Commercial Fit-Out</li>
              <li className="text-white/60 text-sm">Project Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">
                <span className="block text-white mb-1">Email</span>
                info@fineworks.uk
              </li>
              <li className="text-white/60 text-sm">
                <span className="block text-white mb-1">Phone</span>
                +44 7512 649216
              </li>
              <li className="text-white/60 text-sm">
                <span className="block text-white mb-1">Office</span>
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {currentYear} Fineworks.uk. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
