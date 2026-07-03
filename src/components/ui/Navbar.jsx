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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome
    ? 'text-warm-black'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${navBg}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-1 ${textColor} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-[0.15em] font-light ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs tracking-[0.15em] uppercase font-medium ${textColor} hover:text-gold transition-colors`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-xs tracking-[0.15em] uppercase font-medium ${textColor} hover:text-gold transition-colors`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs tracking-[0.15em] uppercase font-medium ${textColor} hover:text-gold transition-colors`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs tracking-[0.15em] uppercase font-medium ${textColor} hover:text-gold transition-colors`}>
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
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-warm-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-warm-brown/10 animate-fade-in">
          <div className="container-wide py-6 space-y-4">
            <Link to="/shop" className="block text-xs tracking-[0.15em] uppercase font-medium text-warm-black hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="block text-xs tracking-[0.15em] uppercase font-medium text-warm-black hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block text-xs tracking-[0.15em] uppercase font-medium text-warm-black hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block text-xs tracking-[0.15em] uppercase font-medium text-warm-black hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
