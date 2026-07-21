import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
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
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold transition-colors duration-300 ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs font-sans font-medium uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold ${textColor}`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs font-sans font-medium uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold ${textColor}`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs font-sans font-medium uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold ${textColor}`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs font-sans font-medium uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold ${textColor}`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className={`p-2 transition-colors duration-300 hover:text-brand-gold ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDrawer}
              className={`p-2 transition-colors duration-300 hover:text-brand-gold relative ${textColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand">
          <div className="px-4 py-6 space-y-4">
            <Link to="/shop" className="block text-sm font-sans font-medium uppercase tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="block text-sm font-sans font-medium uppercase tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block text-sm font-sans font-medium uppercase tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block text-sm font-sans font-medium uppercase tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
