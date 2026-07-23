import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/collections', label: 'Collections' },
    { path: '/about', label: 'About' },
    { path: '/journal', label: 'Journal' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
      scrolled
        ? 'bg-stone-900/95 backdrop-blur-md border-b border-stone-700/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest uppercase text-stone-50 hover:text-gold transition-colors">
            Velmora
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-stone-300 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="text-stone-300 hover:text-gold transition-colors p-1 hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className="text-stone-300 hover:text-gold transition-colors p-1 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-stone-900 text-xs font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-stone-300 hover:text-gold transition-colors p-1 md:hidden"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-700 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm uppercase tracking-widest py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-stone-300 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-stone-300 hover:text-gold transition-colors py-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
