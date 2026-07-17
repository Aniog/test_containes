import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleDrawer } = useCart()
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

  const navClass = `
    fixed top-0 left-0 right-0 z-30 transition-all duration-500
    ${scrolled || !isHome
      ? 'bg-brand-surface/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
    }
  `

  const textClass = scrolled || !isHome ? 'text-brand-base' : 'text-white'

  return (
    <nav className={navClass}>
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 -ml-2 ${textClass}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-xs tracking-widest uppercase font-medium ${textClass} hover:text-brand-gold transition-colors`}>
            Shop
          </Link>
          <Link to="/shop?category=necklaces" className={`text-xs tracking-widest uppercase font-medium ${textClass} hover:text-brand-gold transition-colors`}>
            Collections
          </Link>
          <Link to="/" className={`text-xs tracking-widest uppercase font-medium ${textClass} hover:text-brand-gold transition-colors`}>
            About
          </Link>
          <Link to="/" className={`text-xs tracking-widest uppercase font-medium ${textClass} hover:text-brand-gold transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-widest font-semibold absolute left-1/2 -translate-x-1/2 ${textClass}`}
        >
          VELMORA
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-1 md:gap-3">
          <button className={`p-2 ${textClass} hover:text-brand-gold transition-colors`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleDrawer}
            className={`p-2 relative ${textClass} hover:text-brand-gold transition-colors`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-surface border-t border-brand-gold-light/20 animate-fade-in">
          <div className="flex flex-col p-6 space-y-5">
            <Link to="/shop" className="text-sm tracking-widest uppercase text-brand-base font-medium">Shop</Link>
            <Link to="/shop?category=necklaces" className="text-sm tracking-widest uppercase text-brand-base font-medium">Collections</Link>
            <Link to="/" className="text-sm tracking-widest uppercase text-brand-base font-medium">About</Link>
            <Link to="/" className="text-sm tracking-widest uppercase text-brand-base font-medium">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
