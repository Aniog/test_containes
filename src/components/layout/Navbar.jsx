import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FDF8F3]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#1C1814]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav - desktop */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/shop" className="font-body text-xs uppercase tracking-widest text-[#1C1814] hover:text-[#C9A96E] transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop" className="font-body text-xs uppercase tracking-widest text-[#1C1814] hover:text-[#C9A96E] transition-colors duration-300">
              Collections
            </Link>
            <Link to="/" className="font-body text-xs uppercase tracking-widest text-[#1C1814] hover:text-[#C9A96E] transition-colors duration-300">
              About
            </Link>
            <Link to="/" className="font-body text-xs uppercase tracking-widest text-[#1C1814] hover:text-[#C9A96E] transition-colors duration-300">
              Journal
            </Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="font-heading text-2xl md:text-3xl tracking-widest text-[#1C1814]">
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-[#1C1814] hover:text-[#C9A96E] transition-colors duration-300" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative text-[#1C1814] hover:text-[#C9A96E] transition-colors duration-300"
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C9A96E] text-white text-[10px] font-body font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-[#FDF8F3] border-t border-[#E8DFD3]">
          <nav className="flex flex-col gap-4">
            <Link to="/shop" className="font-body text-sm uppercase tracking-widest text-[#1C1814]" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop" className="font-body text-sm uppercase tracking-widest text-[#1C1814]" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/" className="font-body text-sm uppercase tracking-widest text-[#1C1814]" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/" className="font-body text-sm uppercase tracking-widest text-[#1C1814]" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}