import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-cream/95 backdrop-blur-md'

  const textColor = scrolled || !isHome ? 'text-base' : 'text-cream'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-1 ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl font-semibold tracking-section ${textColor} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/shop"
              className={`text-xs font-sans font-medium tracking-section uppercase ${textColor} hover:text-gold transition-colors`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs font-sans font-medium tracking-section uppercase ${textColor} hover:text-gold transition-colors`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs font-sans font-medium tracking-section uppercase ${textColor} hover:text-gold transition-colors`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs font-sans font-medium tracking-section uppercase ${textColor} hover:text-gold transition-colors`}
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
              onClick={toggleCart}
              className={`p-1 relative ${textColor} hover:text-gold transition-colors`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-base text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link
              to="/shop"
              className="text-sm font-sans font-medium tracking-section uppercase text-base hover:text-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="text-sm font-sans font-medium tracking-section uppercase text-base hover:text-gold transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-sm font-sans font-medium tracking-section uppercase text-base hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-sm font-sans font-medium tracking-section uppercase text-base hover:text-gold transition-colors"
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
