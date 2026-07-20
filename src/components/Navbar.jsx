import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-brand-charcoal/95 backdrop-blur-md'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-white'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider ${textColor} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-btn font-medium ${textColor} hover:text-brand-gold-light transition-colors duration-300`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-btn font-medium ${textColor} hover:text-brand-gold-light transition-colors duration-300`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs uppercase tracking-btn font-medium ${textColor} hover:text-brand-gold-light transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs uppercase tracking-btn font-medium ${textColor} hover:text-brand-gold-light transition-colors duration-300`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-brand-gold-light transition-colors duration-300`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative ${textColor} hover:text-brand-gold-light transition-colors duration-300`}
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/shop"
              className="block text-sm uppercase tracking-btn font-medium text-white hover:text-brand-gold-light transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="block text-sm uppercase tracking-btn font-medium text-white hover:text-brand-gold-light transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block text-sm uppercase tracking-btn font-medium text-white hover:text-brand-gold-light transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="block text-sm uppercase tracking-btn font-medium text-white hover:text-brand-gold-light transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
