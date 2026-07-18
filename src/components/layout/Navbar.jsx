import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleDrawer } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'
  const textColor = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu toggle */}
            <button
              className={`md:hidden p-2 ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-ultra-wide ${textColor} transition-colors duration-300`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-xs tracking-widest uppercase ${textColor} hover:opacity-70 transition-opacity duration-300`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity duration-300`}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity duration-300 relative`}
                onClick={toggleDrawer}
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-sans font-medium w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Thin gold accent line */}
        {scrolled && (
          <div className="h-[1px] bg-gradient-to-r from-transparent via-velmora-gold/30 to-transparent" />
        )}
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-velmora-cream transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl text-velmora-charcoal tracking-wider hover:text-velmora-gold transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
