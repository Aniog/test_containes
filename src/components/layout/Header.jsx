import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`font-bold text-xl md:text-2xl uppercase tracking-wider ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              ARTITECT
            </div>
            <div className={`text-xs uppercase tracking-widest ${
              isScrolled ? 'text-slate-600' : 'text-white/80'
            }`}>
              Machinery
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-200 hover:text-amber-600 ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : isScrolled
                    ? 'text-slate-700'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-xs">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm uppercase tracking-wider font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : 'text-slate-700 hover:text-amber-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary w-full text-center text-xs mt-4">
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
