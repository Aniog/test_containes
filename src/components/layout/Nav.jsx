import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent text-cream'
          : 'bg-cream/95 backdrop-blur-sm border-b border-truffle-200/30 text-truffle-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase">
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link>
          </div>

          {/* Logo — center */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.3em] font-light"
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 hover:text-gold transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 hover:text-gold transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
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
          mobileOpen ? 'max-h-80 border-t border-truffle-200/30 bg-cream' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-5 text-sm tracking-widest uppercase text-truffle-800">
          <Link to="/shop">Shop All</Link>
          <Link to="/shop?category=earrings">Earrings</Link>
          <Link to="/shop?category=necklaces">Necklaces</Link>
          <Link to="/shop?category=huggies">Huggies</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
        </div>
      </div>
    </nav>
  )
}
