import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop?category=huggies', label: 'Huggies' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            type="button"
            className="md:hidden p-2 -ml-2 text-current"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-medium uppercase tracking-widest text-current/80 hover:text-current transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-current">
              VELMORA
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-medium uppercase tracking-widest text-current/80 hover:text-current transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="p-2 text-current/80 hover:text-current transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 text-current/80 hover:text-current transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#b08d57] text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 text-current"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#b08d57] text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium uppercase tracking-widest text-current/80 hover:text-current"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-current/80"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
