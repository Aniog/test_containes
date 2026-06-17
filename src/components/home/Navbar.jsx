import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-xl md:text-2xl font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-brand-navy' : 'text-white'
              }`}
            >
              ARTITECT
            </span>
            <span
              className={`hidden sm:inline text-lg md:text-xl font-light tracking-[0.15em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-brand-gold' : 'text-brand-gold'
              }`}
            >
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-brand-gold ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-6 py-2.5 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-brand-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-brand-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-[0.15em] uppercase text-slate-700 font-medium hover:text-brand-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-brand-gold text-brand-navy px-6 py-3 text-sm tracking-[0.15em] uppercase font-semibold"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  )
}