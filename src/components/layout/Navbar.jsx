import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
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

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Left nav links (desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-xs uppercase tracking-[0.12em] font-sans font-medium transition-colors duration-300',
                    scrolled || !isHome ? 'text-dark hover:text-gold' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl tracking-[0.15em] transition-colors duration-300',
                scrolled || !isHome ? 'text-dark' : 'text-white'
              )}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-300',
                  scrolled || !isHome ? 'text-dark hover:text-gold' : 'text-white/90 hover:text-white'
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openCart}
                className={cn(
                  'relative p-2 transition-colors duration-300',
                  scrolled || !isHome ? 'text-dark hover:text-gold' : 'text-white/90 hover:text-white'
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-64' : 'max-h-0'
          )}
        >
          <div className="px-4 pb-4 space-y-1 bg-cream border-t border-taupe-sand">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-sm uppercase tracking-[0.1em] text-dark hover:text-gold transition-colors border-b border-taupe-sand/50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  )
}