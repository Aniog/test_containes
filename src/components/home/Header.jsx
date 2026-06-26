import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-charcoal font-extrabold text-sm">AM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm md:text-base tracking-wide">ARTITECT</span>
              <span className="text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase">Machinery</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light text-charcoal px-5 py-2 rounded text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              Get Quote
            </a>
          </nav>

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
        <div className="md:hidden bg-charcoal border-t border-gold/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-gold text-sm font-medium tracking-wide py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-gold hover:bg-gold-light text-charcoal px-5 py-2.5 rounded text-sm font-semibold tracking-wide text-center transition-colors mt-4"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
