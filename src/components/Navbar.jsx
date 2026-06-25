import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  // Transparent over hero only on the homepage top; solid elsewhere.
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-sand/60 shadow-[0_1px_20px_rgba(28,23,20,0.04)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            type="button"
            className="md:hidden p-1 -ml-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
            ) : (
              <Menu className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors',
              solid ? 'text-ink' : 'text-ivory'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-ivory/90'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="p-1"
          >
            <Search className={cn('w-[18px] h-[18px]', solid ? 'text-ink' : 'text-ivory')} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative p-1"
          >
            <ShoppingBag className={cn('w-[18px] h-[18px]', solid ? 'text-ink' : 'text-ivory')} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-sand/60 bg-ivory animate-fade-in">
          <form onSubmit={onSearchSubmit} className="mx-auto max-w-7xl px-5 md:px-8 py-4 flex items-center gap-3">
            <Search className="w-4 h-4 text-taupe" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewelry, collections…"
              className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-taupe"
            />
            <button type="submit" className="text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sand/60 bg-ivory animate-fade-in">
          <div className="px-5 py-5 flex flex-col gap-5">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.2em] text-ink hover:text-gold"
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
