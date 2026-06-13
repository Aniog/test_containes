import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-brand-dark font-display font-bold text-lg">A</span>
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white tracking-wide">
                ARTITECT
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-brand-gold font-body">
                Machinery
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-brand-gold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-4 py-3 rounded-lg font-body text-sm uppercase tracking-widest transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-brand-gold/10 text-brand-gold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
            <a
              href="tel:+18005551234"
              className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-5 py-3 rounded-lg font-body font-semibold text-sm mt-4"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
