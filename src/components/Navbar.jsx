import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-charcoal'
    : 'text-cream'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-1 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-[0.15em] font-semibold transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors ${textColor}`}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=necklaces"
              className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors ${textColor}`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors ${textColor}`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors ${textColor}`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className={`p-1 transition-colors ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-1 relative transition-colors ${textColor}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-cream text-[10px] font-semibold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <Link
              to="/shop"
              className="block text-sm uppercase tracking-[0.2em] font-medium text-charcoal hover:text-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop?category=necklaces"
              className="block text-sm uppercase tracking-[0.2em] font-medium text-charcoal hover:text-gold transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block text-sm uppercase tracking-[0.2em] font-medium text-charcoal hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="block text-sm uppercase tracking-[0.2em] font-medium text-charcoal hover:text-gold transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
