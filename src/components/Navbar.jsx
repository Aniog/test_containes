import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/data/CartContext'

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

  const navLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/collections', label: 'Collections' },
    { path: '/about', label: 'About' },
    { path: '/journal', label: 'Journal' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-warmCream shadow-[0_1px_4px_rgba(28,28,28,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase font-medium transition-colors duration-300" style={{ color: scrolled || !isHome ? '#2D2D2D' : '#F5F0EB' }}>
            VELMORA
          </Link>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans text-sm tracking-wide font-medium transition-colors duration-300 hover:text-gold"
                style={{ color: scrolled || !isHome ? '#2D2D2D' : '#F5F0EB' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className="transition-colors duration-300 hover:text-gold"
              style={{ color: scrolled || !isHome ? '#2D2D2D' : '#F5F0EB' }}
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={openDrawer}
              className="relative transition-colors duration-300 hover:text-gold"
              style={{ color: scrolled || !isHome ? '#2D2D2D' : '#F5F0EB' }}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-deepCharcoal text-xs font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden transition-colors duration-300 hover:text-gold"
              style={{ color: scrolled || !isHome ? '#2D2D2D' : '#F5F0EB' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-warmCream border-t border-divider">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans text-sm tracking-wide font-medium text-textDark hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
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
