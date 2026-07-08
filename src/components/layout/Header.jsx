import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, toggleDrawer } = useCart()
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ]

  const headerBg = isScrolled
    ? 'bg-velmora-deep shadow-premium'
    : 'bg-transparent'

  const textColor = isScrolled ? 'text-velmora-cream' : 'text-velmora-cream'
  const hoverColor = isScrolled ? 'hover:text-velmora-gold' : 'hover:text-velmora-goldLight'

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl tracking-widest ${textColor} transition-colors duration-500`}
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.25em' }}
          >
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${textColor} ${hoverColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button
              className={`p-2 transition-colors duration-300 ${textColor} ${hoverColor}`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleDrawer}
              className={`relative p-2 transition-colors duration-300 ${textColor} ${hoverColor}`}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-deep text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-velmora-deep border-t border-velmora-gold/20">
          <nav className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-velmora-cream text-lg tracking-wide uppercase hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
