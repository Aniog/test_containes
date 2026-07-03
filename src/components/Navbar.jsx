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
  const { openCart, totalItems } = useCart()
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
    ? 'bg-velmora-charcoal/95 backdrop-blur-md'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-velmora-cream'
    : 'text-velmora-cream'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${textColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-mega-wide uppercase font-light ${textColor} transition-colors`}
            >
              Velmora
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs font-sans font-medium tracking-ultra-wide uppercase ${textColor} hover:text-velmora-gold transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 ${textColor} transition-colors`}>
              <button aria-label="Search" className="hover:text-velmora-gold transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                aria-label="Cart"
                className="relative hover:text-velmora-gold transition-colors duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-charcoal text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-charcoal pt-20 md:hidden">
          <div className="flex flex-col items-center gap-8 py-12">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-2xl tracking-ultra-wide uppercase text-velmora-cream hover:text-velmora-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
