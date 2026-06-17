import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Why Us' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-display font-bold text-lg">AM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-primary leading-tight">
                ARTITECT
              </h1>
              <p className="text-[11px] font-body font-medium text-brand-500 tracking-[0.2em] uppercase">
                Machinery
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-brand-700 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-light text-white font-medium py-2.5 px-6 rounded-md transition-all duration-300 text-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-brand-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-body text-base font-medium text-brand-700 hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-accent hover:bg-accent-light text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}