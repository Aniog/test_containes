import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-5 h-5 transition-colors duration-300 ${isTransparent ? 'text-cream' : 'text-stone-900'}`} />
          ) : (
            <Menu className={`w-5 h-5 transition-colors duration-300 ${isTransparent ? 'text-cream' : 'text-stone-900'}`} />
          )}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-ultra-wide font-medium transition-colors duration-300 ${
            isTransparent ? 'text-cream' : 'text-stone-900'
          }`}
        >
          VELMORA
        </Link>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs tracking-ultra-wide font-medium uppercase transition-colors duration-300 hover:text-gold ${
                isTransparent ? 'text-cream/90' : 'text-stone-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1">
          <button
            className={`p-2 transition-colors duration-300 hover:text-gold ${
              isTransparent ? 'text-cream' : 'text-stone-900'
            }`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative transition-colors duration-300 hover:text-gold ${
              isTransparent ? 'text-cream' : 'text-stone-900'
            }`}
            onClick={toggleCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-stone-200 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm tracking-ultra-wide font-medium uppercase text-stone-700 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
