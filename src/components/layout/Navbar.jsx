import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
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
  const { count, open } = useCart()
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
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                'md:hidden transition-colors',
                solid ? 'text-ink' : 'text-ivory'
              )}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium transition-colors',
                solid ? 'text-ink' : 'text-ivory'
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center: links */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  'text-[11px] uppercase tracking-widest2 font-medium transition-colors hover:text-champagne',
                  solid ? 'text-stone' : 'text-ivory/90'
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
              className={cn(
                'transition-colors hover:text-champagne',
                solid ? 'text-ink' : 'text-ivory'
              )}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              className={cn(
                'relative transition-colors hover:text-champagne',
                solid ? 'text-ink' : 'text-ivory'
              )}
              onClick={open}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-champagne text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <form onSubmit={onSearchSubmit} className="flex items-center gap-3">
              <Search size={18} className="text-stone" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewelry, collections…"
                className="flex-1 bg-transparent border-b border-sand py-2 text-sm text-ink placeholder:text-taupe focus:outline-none focus:border-champagne"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-widest2 text-champagne hover:text-champagne-deep"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 text-stone hover:text-champagne"
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
