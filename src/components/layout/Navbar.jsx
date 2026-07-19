import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-velvet-200/50'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-onyx-950' : 'text-ivory-50'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${textColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl lg:text-3xl tracking-ultra-wide ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-sans text-xs tracking-ultra-wide uppercase ${textColor} opacity-80 hover:opacity-100 transition-opacity relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className={`p-2 ${textColor} opacity-80 hover:opacity-100 transition-opacity`}>
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={openCart}
                className={`relative p-2 ${textColor} opacity-80 hover:opacity-100 transition-opacity`}
              >
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-400 text-onyx-950 text-[10px] font-sans font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-onyx-950/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory-50 shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-3 font-serif text-2xl text-onyx-900 hover:text-gold-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-velvet-200">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-onyx-400 mb-4">
                Need help?
              </p>
              <p className="font-sans text-sm text-onyx-600">
                hello@velmora.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
