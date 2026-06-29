import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-navy font-extrabold text-lg">A</span>
            </div>
            <div className="leading-tight">
              <span className="text-white font-bold text-lg tracking-wide block">ARTITECT</span>
              <span className="text-gold text-xs tracking-[0.25em] font-medium">MACHINERY</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-gold transition-colors duration-300 text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-gold hover:bg-gold-light text-white font-semibold px-6 py-3 rounded-full text-sm text-center transition-all duration-300 mt-4"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
