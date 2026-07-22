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

  const navBg = scrolled
    ? 'bg-cream/95 backdrop-blur-md border-b border-sand'
    : isHome
      ? 'bg-transparent'
      : 'bg-cream border-b border-sand'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-1 ${textColor} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-product font-semibold ${textColor} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs tracking-product font-sans font-medium uppercase ${textColor} hover:text-gold transition-colors`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs tracking-product font-sans font-medium uppercase ${textColor} hover:text-gold transition-colors`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs tracking-product font-sans font-medium uppercase ${textColor} hover:text-gold transition-colors`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs tracking-product font-sans font-medium uppercase ${textColor} hover:text-gold transition-colors`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-1 ${textColor} hover:text-gold transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-1 relative ${textColor} hover:text-gold transition-colors`}
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-5 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm tracking-product font-sans font-medium uppercase text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm tracking-product font-sans font-medium uppercase text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-product font-sans font-medium uppercase text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-product font-sans font-medium uppercase text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
