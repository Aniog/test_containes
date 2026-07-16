import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-cream/95 backdrop-blur-md text-charcoal border-b border-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-sans tracking-wide uppercase">
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/journal" className="hover:text-gold transition-colors">Journal</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl lg:text-2xl tracking-wider ${
              transparent ? 'text-white' : 'text-charcoal'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 lg:gap-3">
            <button className="p-2 hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              className="p-2 hover:text-gold transition-colors relative"
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-2 text-sm font-sans tracking-wide uppercase">
            <Link to="/shop" className="py-1.5 hover:text-gold transition-colors">Shop</Link>
            <Link to="/collections" className="py-1.5 hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="py-1.5 hover:text-gold transition-colors">About</Link>
            <Link to="/journal" className="py-1.5 hover:text-gold transition-colors">Journal</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}