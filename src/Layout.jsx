import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Machines', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-xl lg:text-2xl font-serif font-bold tracking-wide text-white">
                ARTITECT
              </span>
              <span className="hidden sm:inline text-sm lg:text-base font-sans font-light tracking-[0.2em] uppercase text-gold">
                Machinery
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-5 py-2.5 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors"
              >
                Get a Quote
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-navy border-t border-white/5">
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide uppercase py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-2.5 text-sm font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors text-center"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">ARTITECT MACHINERY</h3>
              <p className="text-sm leading-relaxed text-white/50">
                Precision sheet metal folding machines engineered for performance, reliability, and craftsmanship.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact</h4>
              <div className="text-sm text-white/60 space-y-2">
                <p>info@artitectmachinery.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Industrial Way, Suite 100<br />Chicago, IL 60601</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
