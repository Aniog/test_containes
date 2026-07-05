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
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold/15'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 flex-1">
          <button
            className="md:hidden text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-widest2 font-medium transition-colors',
              solid ? 'text-ink' : 'text-cream'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                'text-xs uppercase tracking-widest2 transition-colors duration-300 hover:text-gold',
                solid ? 'text-ink' : 'text-cream/90'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-gold/15 bg-cream/95 backdrop-blur-md">
          <form onSubmit={onSearchSubmit} className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
            <Search size={18} className="text-muted" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for earrings, necklaces, huggies…"
              className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-muted"
            />
            <button type="submit" className="text-xs uppercase tracking-widest2 text-gold hover:text-ink">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gold/15 bg-cream">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 text-ink hover:text-gold"
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
