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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
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
    : 'text-cream'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor} transition-colors duration-300`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-ultra-wide ${textColor} transition-colors duration-300`}
        >
          VELMORA
        </Link>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs font-sans font-medium tracking-widest uppercase ${textColor} hover:text-gold transition-colors duration-300`}
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
            className={`relative ${textColor} hover:text-gold transition-colors duration-300`}
            onClick={toggleDrawer}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone-200">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-sans font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300"
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
