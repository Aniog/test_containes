import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-6 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
              ) : (
                <Menu className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
              )}
            </button>
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={cn(
                      'text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-gold',
                      solid ? 'text-ink' : 'text-ivory'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.25em] font-semibold transition-colors duration-300',
              solid ? 'text-ink' : 'text-ivory'
            )}
          >
            VELMORA
          </Link>

          {/* Right: links + icons */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(2).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={cn(
                      'text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-gold',
                      solid ? 'text-ink' : 'text-ivory'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={cn('p-1 transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn('relative p-1 transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-line">
          <ul className="px-5 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="block text-sm uppercase tracking-[0.15em] font-medium text-ink py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
