import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-brand-navy' : 'text-white'
              }`}
            >
              ARTITECT
            </span>
            <span
              className={`text-xl lg:text-2xl font-light tracking-wider transition-colors duration-500 ${
                scrolled ? 'text-brand-accent' : 'text-brand-accent-light'
              }`}
            >
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-accent ${
                  scrolled ? 'text-brand-text' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? 'bg-brand-accent text-white hover:bg-brand-accent-light'
                  : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
              }`}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-500 ${
              scrolled ? 'text-brand-navy' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-brand-border px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-brand-text font-medium py-2 hover:text-brand-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block mt-2 px-6 py-2.5 bg-brand-accent text-white rounded-lg font-semibold hover:bg-brand-accent-light transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}