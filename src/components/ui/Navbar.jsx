import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navClass = scrolled || !isHome
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const linkClass = scrolled || !isHome
    ? 'text-velmora-900 hover:text-gold-600'
    : 'text-white/90 hover:text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden transition-colors ${linkClass}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`serif-heading text-2xl md:text-3xl font-bold tracking-[0.12em] transition-tex ${scrolled || !isHome ? 'text-velmora-900' : 'text-white'}`}
            >
              VELMORA
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors ${linkClass}`}>
                Shop
              </Link>
              <Link to="/shop" className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors ${linkClass}`}>
                Collections
              </Link>
              <Link to="/" className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors ${linkClass}`}>
                About
              </Link>
              <Link to="/" className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors ${linkClass}`}>
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`transition-colors ${linkClass}`} aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
              <button
                className={`relative transition-colors ${linkClass}`}
                onClick={onCartOpen}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-warm-white border-t border-velmora-100">
            <div className="px-5 py-4 space-y-4">
              <Link to="/shop" className="block text-sm tracking-[0.12em] uppercase text-velmora-900 font-medium">
                Shop All
              </Link>
              <Link to="/shop" className="block text-sm tracking-[0.12em] uppercase text-velmora-900 font-medium">
                Collections
              </Link>
              <Link to="/" className="block text-sm tracking-[0.12em] uppercase text-velmora-900 font-medium">
                About
              </Link>
              <Link to="/" className="block text-sm tracking-[0.12em] uppercase text-velmora-900 font-medium">
                Journal
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  )
}