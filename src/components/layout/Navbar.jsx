import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
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
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Mobile menu + Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-1 -ml-1"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-charcoal" />
              </button>
              <Link
                to="/"
                className="font-serif text-2xl sm:text-[1.75rem] font-medium tracking-wide text-charcoal"
              >
                VELMORA
              </Link>
            </div>

            {/* Center: Nav links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-body-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    location.pathname === link.to
                      ? 'text-gold'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Search + Cart */}
            <div className="flex items-center gap-4 sm:gap-5">
              <button className="p-1" aria-label="Search">
                <Search className="w-[18px] h-[18px] text-charcoal/70 hover:text-charcoal transition-colors" />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-1"
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-[18px] h-[18px] text-charcoal/70 hover:text-charcoal transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] bg-gold text-white text-overline font-semibold flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 w-[85%] max-w-sm h-full bg-cream shadow-elevated animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-parchment">
              <span className="font-serif text-xl tracking-wide text-charcoal">
                VELMORA
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>
            <nav className="flex flex-col py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-6 py-3.5 text-body font-medium tracking-wide uppercase text-charcoal/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-parchment">
              <p className="text-body-sm text-warm-gray">
                Free worldwide shipping on all orders
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
