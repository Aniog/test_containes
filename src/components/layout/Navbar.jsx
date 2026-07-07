import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop/earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { totals, openCart } = useCart()

  const isHome = location.pathname === '/'
  const useTransparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out-soft',
        useTransparent
          ? 'bg-transparent text-cream'
          : 'bg-cream/95 backdrop-blur-sm text-deep border-b border-taupe/30',
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex items-center justify-between h-16 md:h-20"
      >
        <Link
          to="/"
          aria-label="Velmora — Home"
          className={cn(
            'font-serif text-xl md:text-[22px] tracking-[0.32em] font-medium transition-colors',
            useTransparent ? 'text-cream' : 'text-deep',
          )}
        >
          VELMORA
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-[12px] tracking-eyebrow uppercase font-sans font-medium transition-colors',
                    useTransparent
                      ? 'text-cream/90 hover:text-champagne'
                      : 'text-deep/85 hover:text-gold',
                    isActive && (useTransparent ? 'text-champagne' : 'text-gold'),
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              'p-2 transition-colors',
              useTransparent ? 'text-cream hover:text-champagne' : 'text-deep hover:text-gold',
            )}
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart (${totals.itemCount} items)`}
            onClick={openCart}
            className={cn(
              'relative p-2 transition-colors',
              useTransparent ? 'text-cream hover:text-champagne' : 'text-deep hover:text-gold',
            )}
          >
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
            {totals.itemCount > 0 && (
              <span
                className={cn(
                  'absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full text-[10px] font-sans font-medium',
                  useTransparent
                    ? 'bg-champagne text-deep'
                    : 'bg-gold text-white',
                )}
                aria-hidden="true"
              >
                {totals.itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'md:hidden p-2 transition-colors',
              useTransparent ? 'text-cream' : 'text-deep',
            )}
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden border-t transition-[max-height,opacity] duration-500 ease-out-soft',
          useTransparent ? 'border-cream/15' : 'border-taupe/30',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          useTransparent ? 'bg-deep/95 backdrop-blur-md' : 'bg-cream',
        )}
      >
        <ul className="container-page py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={cn(
                  'block text-base font-sans uppercase tracking-eyebrow',
                  useTransparent ? 'text-cream' : 'text-deep',
                )}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
