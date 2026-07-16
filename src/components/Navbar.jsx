import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
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

  const navBg = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-ink-950' : 'text-cream-50'
  const logoColor = scrolled || !isHome ? 'text-ink-950' : 'text-cream-50'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-out ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Left nav — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300 hover:text-gold-500 ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo — center */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-extra-wide font-medium transition-colors duration-300 ${logoColor}`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button className={`p-2 ${textColor} hover:text-gold-500 transition-colors`} aria-label="Search">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                className={`p-2 ${textColor} hover:text-gold-500 transition-colors relative`}
                onClick={onCartOpen}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-ink-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3 border-t border-ink-100 bg-cream-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm tracking-widest uppercase font-sans text-ink-700 hover:text-gold-600 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      {(!isHome || scrolled) && <div className="h-16 md:h-20" />}
    </>
  )
}