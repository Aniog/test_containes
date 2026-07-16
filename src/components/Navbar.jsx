import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/components/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  // Transparent over hero (homepage only, top of page), solid otherwise.
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location])

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setQuery('')
    setSearchOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'bg-ivory/95 backdrop-blur-md border-b border-sand/70 shadow-[0_6px_30px_-18px_rgba(42,33,26,0.25)]'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden -ml-1 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X className={cn('h-5 w-5', transparent ? 'text-ivory' : 'text-espresso')} />
            ) : (
              <Menu className={cn('h-5 w-5', transparent ? 'text-ivory' : 'text-espresso')} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors',
              transparent ? 'text-ivory' : 'text-espresso'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-gold',
                transparent ? 'text-ivory/90' : 'text-cocoa'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: search + cart */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="p-1"
          >
            <Search className={cn('h-5 w-5 transition-colors', transparent ? 'text-ivory' : 'text-espresso')} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative p-1"
          >
            <ShoppingBag className={cn('h-5 w-5 transition-colors', transparent ? 'text-ivory' : 'text-espresso')} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-sand/70 bg-ivory">
          <form onSubmit={submitSearch} className="mx-auto flex max-w-7xl items-center gap-3 px-5 md:px-8 py-4">
            <Search className="h-4 w-4 text-taupe" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewelry, collections…"
              className="flex-1 bg-transparent text-sm text-espresso placeholder:text-taupe outline-none"
            />
            <button type="submit" className="text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sand/70 bg-ivory">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 text-sm uppercase tracking-[0.2em] text-cocoa border-b border-sand/50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
