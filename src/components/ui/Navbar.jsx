import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-base text-white border-b border-hairline/20'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest uppercase font-semibold">
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
          <Link to="/shop" className="hover:text-accent transition-colors duration-200">Shop</Link>
          <Link to="/shop" className="hover:text-accent transition-colors duration-200">Collections</Link>
          <Link to="/about" className="hover:text-accent transition-colors duration-200">About</Link>
          <Link to="/journal" className="hover:text-accent transition-colors duration-200">Journal</Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="hover:text-accent transition-colors duration-200" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className="hover:text-accent transition-colors duration-200 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-base text-xs w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden hover:text-accent transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-base border-t border-hairline/20 px-6 py-6">
          <div className="flex flex-col gap-4 font-sans text-sm tracking-wide">
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/shop" className="hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
