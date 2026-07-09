import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../contexts/CartContext'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[var(--velmora-surface)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-1 md:flex-none text-center md:text-left">
              <h1
                className={`serif-heading text-2xl md:text-3xl tracking-[0.2em] transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                to="/shop"
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--velmora-gold)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white/90'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--velmora-gold)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white/90'
                }`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--velmora-gold)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white/90'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--velmora-gold)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white/90'
                }`}
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-[var(--velmora-gold)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-[var(--velmora-gold)] ${
                  scrolled || !isHome
                    ? 'text-[var(--velmora-text)]'
                    : 'text-white'
                }`}
                onClick={onCartOpen}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--velmora-gold)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-surface)] md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              to="/shop"
              className="serif-heading text-3xl tracking-[0.1em] hover:text-[var(--velmora-gold)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="serif-heading text-3xl tracking-[0.1em] hover:text-[var(--velmora-gold)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="serif-heading text-3xl tracking-[0.1em] hover:text-[var(--velmora-gold)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="serif-heading text-3xl tracking-[0.1em] hover:text-[var(--velmora-gold)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
