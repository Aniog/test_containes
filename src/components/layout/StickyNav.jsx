import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
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

  const navBg = scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-cream/95 backdrop-blur-md'

  const textColor = scrolled || !isHome ? 'text-warm-black' : 'text-ivory'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-wider font-medium ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : '/'}
                className={`text-xs font-sans font-medium tracking-wide-btn uppercase ${textColor} hover:text-gold transition-colors duration-300`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button className={`hidden md:block p-2 ${textColor} hover:text-gold transition-colors duration-300`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDrawer}
              className={`p-2 relative ${textColor} hover:text-gold transition-colors duration-300`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-warm-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-4 py-6 space-y-4">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : '/'}
                className="block text-sm font-sans font-medium tracking-wide-btn uppercase text-warm-black hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 border-t border-sand">
              <div className="flex items-center gap-2 text-sm font-sans text-warm-gray">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default StickyNav
