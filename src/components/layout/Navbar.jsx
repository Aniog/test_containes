import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart, justAdded } = useCart()
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

  const navBg = scrolled
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-warm-white/95 backdrop-blur-md shadow-sm'

  const textColor = scrolled || !isHome ? 'text-warm-black' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
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
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-[0.3em] font-light ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs uppercase tracking-[0.2em] font-medium ${textColor} hover:text-gold transition-colors duration-300`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-xs uppercase tracking-[0.2em] font-medium ${textColor} hover:text-gold transition-colors duration-300`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs uppercase tracking-[0.2em] font-medium ${textColor} hover:text-gold transition-colors duration-300`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs uppercase tracking-[0.2em] font-medium ${textColor} hover:text-gold transition-colors duration-300`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-gold transition-colors duration-300`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`relative ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className={`absolute -top-2 -right-2 bg-gold text-warm-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ${justAdded ? 'badge-pulse' : ''}`}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-white border-t border-sand mobile-menu-enter">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-medium text-warm-black hover:text-gold transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-medium text-warm-black hover:text-gold transition-colors duration-300">
              Collections
            </Link>
            <Link to="/about" className="text-xs uppercase tracking-[0.2em] font-medium text-warm-black hover:text-gold transition-colors duration-300">
              About
            </Link>
            <Link to="/journal" className="text-xs uppercase tracking-[0.2em] font-medium text-warm-black hover:text-gold transition-colors duration-300">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
