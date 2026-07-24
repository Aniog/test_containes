import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Solid when scrolled, or when not on home, or mobile menu open
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        solid ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,23,20,0.08)]' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X width={20} height={20} className={solid ? 'text-ink' : 'text-cream'} />
            ) : (
              <Menu width={20} height={20} className={solid ? 'text-ink' : 'text-cream'} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] transition-colors duration-500',
              solid ? 'text-ink' : 'text-cream'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-widest2 transition-colors duration-300 hover:text-gold',
                solid ? 'text-ink' : 'text-cream'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <Search width={19} height={19} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <ShoppingBag width={19} height={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <div className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-widest2 text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
