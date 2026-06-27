import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import CartDrawer from './CartDrawer'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { totalItems } = useCart()
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

  const navSolid = scrolled || !isHome || mobileOpen

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navSolid
            ? 'bg-white-soft/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                    navSolid ? 'text-charcoal' : 'text-white/90'
                  } hover:opacity-70`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link
              to="/"
              className={`text-2xl md:text-3xl font-serif tracking-[0.08em] font-medium transition-colors duration-300 ${
                navSolid ? 'text-charcoal' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 ${
                  navSolid ? 'text-charcoal' : 'text-white/90'
                } hover:opacity-70`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`relative p-2 transition-colors duration-300 ${
                  navSolid ? 'text-charcoal' : 'text-white/90'
                } hover:opacity-70`}
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 bg-white-soft space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm tracking-[0.12em] uppercase font-medium text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <hr className="hairline mt-4" />
          </div>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}