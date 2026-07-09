import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { totalItems } = useCart()
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
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textClass = scrolled || !isHome ? 'text-deep-charcoal' : 'text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
      >
        <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 h-[72px]">
          {/* Mobile menu toggle */}
          <button
            className={`md:hidden ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${textClass}`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${textClass}`}>
              Collections
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-[0.15em] font-medium ${textClass} hover:opacity-80 transition-opacity`}
          >
            VELMORA
          </Link>

          {/* Right nav - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${textClass}`}>
              About
            </Link>
            <Link to="/journal" className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${textClass}`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className={`${textClass} hover:text-gold transition-colors`} aria-label="Search">
              <Search size={19} />
            </button>
            <button
              className={`${textClass} hover:text-gold transition-colors relative`}
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-sans font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } ${scrolled || !isHome ? 'bg-cream' : 'bg-deep-charcoal/90 backdrop-blur-md'}`}
        >
          <div className="flex flex-col px-6 pb-6 pt-2 gap-5">
            <Link to="/shop" className={`text-sm tracking-widest uppercase ${scrolled || !isHome ? 'text-deep-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-sm tracking-widest uppercase ${scrolled || !isHome ? 'text-deep-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
              Collections
            </Link>
            <Link to="/about" className={`text-sm tracking-widest uppercase ${scrolled || !isHome ? 'text-deep-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
              About
            </Link>
            <Link to="/journal" className={`text-sm tracking-widest uppercase ${scrolled || !isHome ? 'text-deep-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
              Journal
            </Link>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-[72px]" />
    </>
  )
}
