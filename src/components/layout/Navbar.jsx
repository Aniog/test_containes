import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar({ onCartClick, onSearchClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[var(--velmora-bg)]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="velmora-heading text-xl sm:text-2xl tracking-widest">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/shop" className="velmora-link text-xs tracking-widest uppercase">Shop</Link>
              <Link to="/shop?category=earrings" className="velmora-link text-xs tracking-widest uppercase">Collections</Link>
              <a href="#story" className="velmora-link text-xs tracking-widest uppercase">About</a>
              <a href="#journal" className="velmora-link text-xs tracking-widest uppercase">Journal</a>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 hover:opacity-70 transition-opacity"
                onClick={onSearchClick}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                className="p-2 hover:opacity-70 transition-opacity relative"
                onClick={onCartClick}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--velmora-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
          <nav className="relative bg-[var(--velmora-bg)] h-full w-72 p-8 pt-20">
            <div className="flex flex-col gap-6">
              <Link to="/shop" className="velmora-heading text-2xl velmora-link" onClick={() => setMobileOpen(false)}>Shop</Link>
              <Link to="/shop?category=earrings" className="velmora-heading text-2xl velmora-link" onClick={() => setMobileOpen(false)}>Collections</Link>
              <a href="#story" className="velmora-heading text-2xl velmora-link" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#journal" className="velmora-heading text-2xl velmora-link" onClick={() => setMobileOpen(false)}>Journal</a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
