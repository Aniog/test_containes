import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/collections', label: 'Collections' },
    { path: '/about', label: 'About' },
    { path: '/journal', label: 'Journal' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-charcoal' : 'text-white'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-logo uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
              scrolled || !isHome ? 'text-charcoal' : 'text-white'
            }`}
          >
            Velmora
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm tracking-cta uppercase transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  scrolled || !isHome ? 'text-charcoal' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                scrolled || !isHome ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 transition-colors duration-300 hover:text-gold relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                scrolled || !isHome ? 'text-charcoal' : 'text-white'
              }`}
              onClick={openDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-xs font-sans font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-borderwarm">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block font-sans text-sm tracking-cta uppercase text-charcoal hover:text-gold transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
