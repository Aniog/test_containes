import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/data/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
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
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-cream/95 backdrop-blur-md'

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden ${textColor} transition-colors`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors`}
              >
                Journal
              </Link>
            </div>

            {/* Logo - always centered */}
            <Link
              to="/"
              className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl font-semibold tracking-ultra-wide ${textColor} hover:text-brand-gold transition-colors`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} hover:text-brand-gold transition-colors`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`relative ${textColor} hover:text-brand-gold transition-colors`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-cream animate-fade-in">
          <div className="flex items-center justify-between px-5 h-16">
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5 text-brand-charcoal" />
            </button>
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-ultra-wide text-brand-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              VELMORA
            </Link>
            <div className="w-5" />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 pt-20">
            <Link
              to="/shop"
              className="font-serif text-3xl text-brand-charcoal tracking-super-wide uppercase hover:text-brand-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="font-serif text-3xl text-brand-charcoal tracking-super-wide uppercase hover:text-brand-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-serif text-3xl text-brand-charcoal tracking-super-wide uppercase hover:text-brand-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="font-serif text-3xl text-brand-charcoal tracking-super-wide uppercase hover:text-brand-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
