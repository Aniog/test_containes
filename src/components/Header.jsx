import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
          <a href="#" className="flex items-center gap-2">
            <span className={`text-xl md:text-2xl font-heading font-bold tracking-wide ${
              scrolled ? 'text-brand-navy' : 'text-white'
            }`}>
              ARTITECT
            </span>
            <span className={`hidden sm:inline text-xs md:text-sm font-light tracking-widest uppercase ${
              scrolled ? 'text-brand-gold' : 'text-white/80'
            }`}>
              Machinery
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-text-muted hover:text-brand-navy'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                scrolled
                  ? 'bg-brand-navy text-white hover:bg-brand-navy-light'
                  : 'bg-brand-gold text-white hover:bg-[#B8983B]'
              }`}
            >
              Get a Quote
            </a>
          </nav>

          <button
            className={`md:hidden p-2 ${scrolled ? 'text-brand-navy' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-muted hover:text-brand-navy font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2.5 rounded-lg bg-brand-navy text-white font-semibold hover:bg-brand-navy-light transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}