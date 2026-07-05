import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../cart/CartDrawer'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { cartCount } = useCart()
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

  const navClass = scrolled || !isHome
    ? 'bg-[#f8f6f3]/95 backdrop-blur-md shadow-sm shadow-black/5'
    : 'bg-transparent'

  const textClass = scrolled || !isHome
    ? 'text-velvet-900'
    : 'text-white'

  const logoClass = scrolled || !isHome
    ? 'text-velvet-900'
    : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile menu toggle */}
            <button
              className={`md:hidden transition-colors ${textClass}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:text-gold ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wider font-semibold transition-all duration-300 ${logoClass}`}
            >
              VELMORA
            </Link>

            {/* Center nav links - desktop (right side) */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:text-gold ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className={`flex items-center gap-4 md:gap-6 ${textClass}`}>
              <button className="hover:text-gold transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="hover:text-gold transition-colors relative"
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 bg-[#f8f6f3] border-t border-velvet-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-sm uppercase tracking-[0.12em] text-velvet-900 hover:text-gold transition-colors border-b border-velvet-200/50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}