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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-warm-black/95 backdrop-blur-md'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-white'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} transition-colors`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop nav links - left */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`${textColor} text-[11px] tracking-[0.12em] uppercase font-medium hover:text-gold transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo - center */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-[0.15em] font-semibold ${textColor} hover:text-gold transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-gold transition-colors duration-300`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`${textColor} hover:text-gold transition-colors duration-300 relative`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-warm-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-black border-t border-white/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white text-sm tracking-[0.12em] uppercase font-medium hover:text-gold transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
