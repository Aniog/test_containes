import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-charcoal'
    : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-content mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-1 transition-colors ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-medium transition-colors duration-300 ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
            <Link
              key={item}
              to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
              className={`font-sans text-xs font-medium uppercase tracking-wider-custom transition-colors duration-300 hover:text-gold ${textColor}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-1 transition-colors ${textColor}`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={toggleDrawer}
            className={`p-1 relative transition-colors ${textColor}`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone-200 animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/shop' : `/${item.toLowerCase()}`}
                className="font-serif text-2xl tracking-wide text-charcoal hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
