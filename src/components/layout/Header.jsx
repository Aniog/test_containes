import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
              isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}>
              A
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                ARTITECT
              </span>
              <span className={`block text-xs font-medium tracking-widest uppercase ${
                isScrolled ? 'text-text-muted' : 'text-white/80'
              }`}>
                MACHINERY
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? isScrolled
                      ? 'text-accent'
                      : 'text-accent'
                    : isScrolled
                      ? 'text-text-muted hover:text-primary'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium uppercase tracking-wide py-2 ${
                    location.pathname === link.to
                      ? 'text-accent'
                      : isScrolled
                        ? 'text-text-muted hover:text-primary'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+1234567890"
                className={`flex items-center gap-2 text-sm font-medium py-2 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
