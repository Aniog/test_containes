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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navBg = scrolled
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-velmora-cream/95 backdrop-blur-md'

  const textColor = scrolled || !isHome
    ? 'text-velmora-charcoal'
    : 'text-white'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs font-medium uppercase tracking-nav transition-colors hover:text-velmora-gold link-underline ${textColor}`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs font-medium uppercase tracking-nav transition-colors hover:text-velmora-gold link-underline ${textColor}`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs font-medium uppercase tracking-nav transition-colors hover:text-velmora-gold link-underline ${textColor}`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs font-medium uppercase tracking-nav transition-colors hover:text-velmora-gold link-underline ${textColor}`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`transition-colors hover:text-velmora-gold ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleCart}
              className={`relative transition-colors hover:text-velmora-gold ${textColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-velmora-cream border-t border-velmora-divider px-4 py-6 flex flex-col gap-4">
          <Link to="/shop" className="text-sm font-medium uppercase tracking-nav text-velmora-charcoal hover:text-velmora-gold transition-colors">
            Shop
          </Link>
          <Link to="/shop" className="text-sm font-medium uppercase tracking-nav text-velmora-charcoal hover:text-velmora-gold transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-sm font-medium uppercase tracking-nav text-velmora-charcoal hover:text-velmora-gold transition-colors">
            About
          </Link>
          <Link to="/journal" className="text-sm font-medium uppercase tracking-nav text-velmora-charcoal hover:text-velmora-gold transition-colors">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
