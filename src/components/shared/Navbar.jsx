import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { path: '/shop', label: 'Shop' },
  { path: '/collections', label: 'Collections' },
  { path: '/about', label: 'About' },
  { path: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems, openDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-cream'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream'
  const iconColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream'
  const dividerColor = scrolled || !isHome ? 'border-divider' : 'border-divider-dark'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className={`h-px ${dividerColor} transition-colors duration-500`} />
        <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${iconColor} transition-colors duration-500`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl tracking-ui uppercase font-semibold ${textColor} transition-colors duration-500`}>
              VELMORA
            </Link>

            {/* Center nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-xs tracking-ui uppercase ${textColor} hover:text-gold transition-colors duration-300 transition-colors duration-500`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`${iconColor} transition-colors duration-500 hover:text-gold transition-colors duration-300`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openDrawer}
                className={`${iconColor} transition-colors duration-500 hover:text-gold transition-colors duration-300 relative`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-xs font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`h-px ${dividerColor} transition-colors duration-500`} />
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/80 backdrop-blur-sm flex items-start justify-center pt-24 md:pt-32" onClick={() => setSearchOpen(false)}>
          <div className="bg-cream w-full max-w-xl mx-4 p-6 md:p-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-divider pb-3">
              <Search className="w-5 h-5 text-text-muted-dark" />
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full bg-transparent font-sans text-base text-charcoal placeholder:text-text-muted-dark focus:outline-none"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="text-text-muted-dark hover:text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="pt-20 px-6" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-serif text-2xl tracking-product uppercase text-charcoal hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="h-px bg-divider my-8" />
            <Link to="/" className="font-serif text-sm tracking-ui uppercase text-text-muted-dark">
              Velmora Fine Jewelry
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
