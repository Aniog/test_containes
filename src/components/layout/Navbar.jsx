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

  // Transparent only over the homepage hero; solid elsewhere.
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
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          solid
            ? 'bg-cream/95 backdrop-blur-md border-b border-linen shadow-[0_1px_0_0_rgba(228,220,207,0.6)]'
            : 'bg-transparent'
        )}
      >
        <nav className="container-velmora">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: mobile menu + logo */}
            <div className="flex items-center gap-4 flex-1">
              <button
                type="button"
                className="md:hidden -ml-1 p-1"
                aria-label="Open menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <X size={20} className={solid ? 'text-espresso' : 'text-cream'} />
                ) : (
                  <Menu size={20} className={solid ? 'text-espresso' : 'text-cream'} />
                )}
              </button>

              <Link
                to="/"
                className={cn(
                  'font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors duration-500',
                  solid ? 'text-ink' : 'text-cream'
                )}
              >
                VELMORA
              </Link>
            </div>

            {/* Center links */}
            <div className="hidden md:flex items-center gap-10">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={cn(
                    'text-xs uppercase tracking-widest2 transition-colors duration-300',
                    solid
                      ? 'text-espresso/80 hover:text-espresso'
                      : 'text-cream/85 hover:text-cream'
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right: search + cart */}
            <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen((v) => !v)}
                className={cn(
                  'transition-colors duration-300',
                  solid ? 'text-espresso hover:text-champagne-deep' : 'text-cream hover:text-champagne'
                )}
              >
                <Search size={19} />
              </button>
              <button
                type="button"
                aria-label="Open cart"
                onClick={openCart}
                className={cn(
                  'relative transition-colors duration-300',
                  solid ? 'text-espresso hover:text-champagne-deep' : 'text-cream hover:text-champagne'
                )}
              >
                <ShoppingBag size={19} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-champagne text-ink text-[10px] font-semibold min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4 animate-fade-in">
              <form onSubmit={onSearchSubmit} className="flex items-center gap-3 border-b border-linen pb-3">
                <Search size={18} className="text-taupe" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search earrings, necklaces, huggies…"
                  className="flex-1 bg-transparent text-sm text-espresso placeholder:text-taupe outline-none"
                />
                <button type="submit" className="text-xs uppercase tracking-widest2 text-champagne-deep hover:text-espresso">
                  Search
                </button>
              </form>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-overlay-in">
          <div className="absolute inset-0 bg-cream" />
          <div className="relative pt-24 px-6 flex flex-col gap-6">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="font-serif text-3xl text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="border-t border-linen pt-6 mt-4">
              <p className="eyebrow mb-3">Visit</p>
              <Link to="/shop" className="block text-espresso text-sm" onClick={() => setMobileOpen(false)}>
                Shop all jewelry
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
