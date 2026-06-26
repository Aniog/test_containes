import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <div>
              <span className={`font-bold text-lg tracking-tight ${
                scrolled ? 'text-brand-dark' : 'text-white'
              }`}>
                ARTITECT
              </span>
              <span className={`font-light text-lg tracking-tight ${
                scrolled ? 'text-brand-dark' : 'text-white'
              }`}>
                {' '}MACHINERY
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-brand-text-secondary hover:text-brand-gold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-sm font-medium text-sm transition-all duration-200 ${
                scrolled
                  ? 'bg-brand-gold text-white hover:bg-brand-gold-light'
                  : 'border border-white text-white hover:bg-white hover:text-brand-dark'
              }`}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${scrolled ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-brand-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-brand-text-secondary hover:text-brand-gold font-medium text-sm py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center bg-brand-gold text-white px-5 py-2.5 rounded-sm font-medium text-sm hover:bg-brand-gold-light transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  )
}