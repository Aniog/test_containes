import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  const bgClass = scrolled || !isHome
    ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300/50'
    : 'bg-transparent'

  const textClass = scrolled || !isHome ? 'text-slate-850' : 'text-slate-850'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textClass} hover:text-gold-600 transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none md:w-1/4">
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-ultra-wide font-light ${textClass} hover:text-gold-600 transition-colors`}
            >
              VELMORA
            </Link>
          </div>

          {/* Center nav */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[11px] uppercase tracking-ultra-wide font-medium ${textClass} hover:text-gold-600 transition-colors duration-200 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:w-1/4 justify-end">
            <button
              className={`p-2 ${textClass} hover:text-gold-600 transition-colors`}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className={`p-2 ${textClass} hover:text-gold-600 transition-colors relative`}
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold-600 text-cream-50 text-[9px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-100 border-b border-cream-300 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block font-sans text-sm uppercase tracking-ultra-wide text-slate-850 hover:text-gold-600 transition-colors py-2"
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
