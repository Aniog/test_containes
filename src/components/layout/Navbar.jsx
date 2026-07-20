import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isTransparent = location.pathname === '/' && !scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent text-cream'
          : 'bg-cream/95 backdrop-blur-sm text-espresso shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold"
          >
            VELMORA
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-sans">
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link>
            <span className="hover:text-gold transition-colors cursor-pointer">About</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Journal</span>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="p-1 hover:text-gold transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              onClick={onCartClick}
              className="p-1 hover:text-gold transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-72' : 'max-h-0'
        } ${isTransparent ? 'bg-espresso/95' : 'bg-cream/95'}`}
      >
        <div className="px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-sans">
          <Link to="/shop" className="hover:text-gold transition-colors">Shop All</Link>
          <Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link>
          <Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link>
          <Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link>
          <span className="hover:text-gold transition-colors cursor-pointer">About</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Journal</span>
        </div>
      </div>
    </nav>
  )
}