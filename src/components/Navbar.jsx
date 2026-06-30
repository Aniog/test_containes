import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../cart/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
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

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-charcoal/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-white'
    : 'text-white'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-light ${textColor} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs tracking-wide-2 uppercase font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs tracking-wide-2 uppercase font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs tracking-wide-2 uppercase font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs tracking-wide-2 uppercase font-medium ${textColor} hover:text-gold transition-colors duration-300`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-gold transition-colors duration-300`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDrawer}
              className={`relative ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link
              to="/shop"
              className="text-sm tracking-wide-2 uppercase font-medium text-white hover:text-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="text-sm tracking-wide-2 uppercase font-medium text-white hover:text-gold transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-sm tracking-wide-2 uppercase font-medium text-white hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-sm tracking-wide-2 uppercase font-medium text-white hover:text-gold transition-colors"
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
