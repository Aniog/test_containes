import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled
    ? 'bg-warm-black/95 backdrop-blur-md shadow-lg'
    : isHome
      ? 'bg-transparent'
      : 'bg-warm-black'

  const linkHover = 'text-text-light/70 hover:text-muted-gold transition-colors duration-300'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-light p-1"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-ultra-wide text-text-light font-medium">
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`hover-underline text-xs uppercase tracking-ultra-wide font-medium ${linkHover}`}>
              Shop
            </Link>
            <Link to="/shop?collection=all" className={`hover-underline text-xs uppercase tracking-ultra-wide font-medium ${linkHover}`}>
              Collections
            </Link>
            <Link to="/about" className={`hover-underline text-xs uppercase tracking-ultra-wide font-medium ${linkHover}`}>
              About
            </Link>
            <Link to="/journal" className={`hover-underline text-xs uppercase tracking-ultra-wide font-medium ${linkHover}`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="text-text-light/70 hover:text-muted-gold transition-colors duration-300 p-1">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className="relative text-text-light/70 hover:text-muted-gold transition-colors duration-300 p-1"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-muted-gold text-warm-black text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-black border-t border-warm-charcoal/30">
          <div className="px-6 py-6 space-y-4">
            <Link to="/shop" className="block text-sm uppercase tracking-ultra-wide text-text-light/70 hover:text-muted-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop?collection=all" className="block text-sm uppercase tracking-ultra-wide text-text-light/70 hover:text-muted-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="block text-sm uppercase tracking-ultra-wide text-text-light/70 hover:text-muted-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="block text-sm uppercase tracking-ultra-wide text-text-light/70 hover:text-muted-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
