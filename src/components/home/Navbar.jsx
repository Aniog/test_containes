import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <span className="text-navy-900 font-bold text-sm">AM</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              ARTITECT <span className="text-gold">MACHINERY</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-gold transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold text-navy-900 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-gold transition-colors duration-200 text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-gold text-navy-900 px-5 py-2.5 rounded-lg font-semibold text-sm text-center hover:bg-gold/90 transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}