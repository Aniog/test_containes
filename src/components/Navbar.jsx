import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = scrolled
    ? 'bg-warm-black/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-warm-black'

  const textColor = scrolled || !isHome ? 'text-warm-cream' : 'text-warm-cream'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-lg md:text-xl uppercase tracking-logo text-warm-cream">
              VELMORA
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`font-sans text-xs uppercase tracking-wider ${textColor} hover:text-gold transition-colors`}>Shop</Link>
              <Link to="/shop?view=collections" className={`font-sans text-xs uppercase tracking-wider ${textColor} hover:text-gold transition-colors`}>Collections</Link>
              <Link to="/about" className={`font-sans text-xs uppercase tracking-wider ${textColor} hover:text-gold transition-colors`}>About</Link>
              <Link to="/journal" className={`font-sans text-xs uppercase tracking-wider ${textColor} hover:text-gold transition-colors`}>Journal</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} hover:text-gold transition-colors`} aria-label="Search">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button onClick={openCart} className={`${textColor} hover:text-gold transition-colors relative`} aria-label="Open cart">
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-warm-black text-[10px] font-semibold flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className={`md:hidden ${textColor} hover:text-gold transition-colors`}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-warm-black/40 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-warm-black z-50 transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <button onClick={() => setMobileOpen(false)} className="text-warm-cream hover:text-gold transition-colors" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 space-y-6">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block font-serif text-lg uppercase tracking-wider text-warm-cream hover:text-gold transition-colors">Home</Link>
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="block font-sans text-sm uppercase tracking-wider text-warm-cream hover:text-gold transition-colors">Shop</Link>
          <Link to="/shop?view=collections" onClick={() => setMobileOpen(false)} className="block font-sans text-sm uppercase tracking-wider text-warm-cream hover:text-gold transition-colors">Collections</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block font-sans text-sm uppercase tracking-wider text-warm-cream hover:text-gold transition-colors">About</Link>
          <Link to="/journal" onClick={() => setMobileOpen(false)} className="block font-sans text-sm uppercase tracking-wider text-warm-cream hover:text-gold transition-colors">Journal</Link>
        </div>
        <div className="px-6 mt-12 border-t border-white/10 pt-6">
          <p className="font-serif text-xs uppercase tracking-wider text-warm-cream/40">Free Worldwide Shipping</p>
        </div>
      </div>
    </>
  )
}
