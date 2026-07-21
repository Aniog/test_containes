import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
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

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor} transition-colors`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl font-light tracking-ultra-wide ${textColor} transition-colors`}
        >
          VELMORA
        </Link>

        {/* Center nav links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs font-semibold uppercase tracking-wide-product ${textColor} hover:text-gold transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:text-gold transition-colors duration-300`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
            onClick={toggleDrawer}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone-200 animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-semibold uppercase tracking-wide-product text-charcoal hover:text-gold transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
