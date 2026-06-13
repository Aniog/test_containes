import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-sm leading-none">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-navy font-extrabold text-lg leading-tight tracking-tight">
                ARTITECT
              </span>
              <span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase leading-tight">
                Machinery
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-brand-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center bg-brand-gold hover:bg-brand-gold/90 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}