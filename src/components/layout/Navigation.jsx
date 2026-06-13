import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span
              className={`font-heading text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-brand-navy' : 'text-white'
              }`}
            >
              ARTITECT
            </span>
            <span
              className={`font-heading text-lg font-light italic transition-colors ${
                isScrolled ? 'text-brand-gold' : 'text-brand-gold-light'
              }`}
            >
              Machinery
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-widest transition-colors duration-200 relative group ${
                  isScrolled
                    ? 'text-brand-navy hover:text-brand-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                isScrolled
                  ? 'bg-brand-gold text-white hover:bg-brand-gold-light'
                  : 'border-2 border-white text-white hover:bg-white hover:text-brand-navy'
              }`}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-brand-navy' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-brand-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-brand-navy font-medium uppercase tracking-widest text-sm py-2 hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center bg-brand-gold text-white px-6 py-3 font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-light transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}