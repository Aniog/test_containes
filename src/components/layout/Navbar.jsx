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
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm border-b border-velmora-border/50'
    : 'bg-transparent'
  const textClass = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 -ml-2 ${textClass} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-light tracking-[0.15em] ${textClass} transition-colors`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs tracking-[0.15em] uppercase font-sans font-medium ${textClass} opacity-80 hover:opacity-100 transition-opacity duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 ${textClass} opacity-80 hover:opacity-100 transition-opacity`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 relative ${textClass} opacity-80 hover:opacity-100 transition-opacity`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-border animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm tracking-[0.15em] uppercase font-sans text-velmora-charcoal hover:text-velmora-gold transition-colors"
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
