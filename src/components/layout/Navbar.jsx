import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/data/CartContext'

const Navbar = () => {
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

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-cream/95 backdrop-blur-md'

  const textColor = scrolled || !isHome ? 'text-base' : 'text-cream'
  const mobileMenuBg = scrolled || !isHome ? 'bg-cream' : 'bg-base'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 -ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-3xl tracking-ultra-wide font-light ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs tracking-ultra-wide uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-xs tracking-ultra-wide uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs tracking-ultra-wide uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs tracking-ultra-wide uppercase font-sans font-medium ${textColor} hover:text-gold transition-colors`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button className={`hidden md:flex p-2 min-w-[44px] min-h-[44px] items-center justify-center ${textColor} hover:text-gold transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 min-w-[44px] min-h-[44px] flex items-center justify-center relative ${textColor} hover:text-gold transition-colors`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-gold text-white text-[10px] font-sans font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div className="absolute inset-0 bg-base/30" onClick={() => setMobileOpen(false)} />
          <div className={`relative ${mobileMenuBg} border-t ${scrolled || !isHome ? 'border-stone-200' : 'border-stone-700'} animate-fade-in`}>
            <div className="px-6 py-8 flex flex-col gap-5">
              <Link to="/shop" className={`text-sm tracking-ultra-wide uppercase font-sans font-medium ${scrolled || !isHome ? 'text-base' : 'text-cream'} hover:text-gold transition-colors`}>
                Shop
              </Link>
              <Link to="/shop" className={`text-sm tracking-ultra-wide uppercase font-sans font-medium ${scrolled || !isHome ? 'text-base' : 'text-cream'} hover:text-gold transition-colors`}>
                Collections
              </Link>
              <Link to="/about" className={`text-sm tracking-ultra-wide uppercase font-sans font-medium ${scrolled || !isHome ? 'text-base' : 'text-cream'} hover:text-gold transition-colors`}>
                About
              </Link>
              <Link to="/journal" className={`text-sm tracking-ultra-wide uppercase font-sans font-medium ${scrolled || !isHome ? 'text-base' : 'text-cream'} hover:text-gold transition-colors`}>
                Journal
              </Link>
              <div className="pt-4 border-t border-stone-200 md:hidden">
                <button className={`flex items-center gap-2 text-sm tracking-ultra-wide uppercase font-sans font-medium ${scrolled || !isHome ? 'text-base' : 'text-cream'} hover:text-gold transition-colors`}>
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
