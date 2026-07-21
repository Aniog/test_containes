import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  const solid = scrolled || menuOpen || searchOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? 'border-b border-velmora-line bg-velmora-bg/90 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="velmora-container flex h-16 items-center justify-between gap-4 md:h-20">
        <button
          type="button"
          className="p-2 text-velmora-ink transition-colors hover:text-velmora-gold lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>

        <Link
          to="/"
          className="font-display text-xl font-semibold uppercase tracking-[0.4em] text-velmora-ink transition-colors hover:text-velmora-gold-light md:text-2xl"
        >
          Velmora
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${
                  isActive && link.label === 'Shop'
                    ? 'text-velmora-gold'
                    : 'text-velmora-ink/80 hover:text-velmora-gold-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <button
            type="button"
            className="p-2 text-velmora-ink transition-colors hover:text-velmora-gold"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="relative p-2 text-velmora-ink transition-colors hover:text-velmora-gold"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-velmora-gold px-1 text-[9px] font-bold text-[#1d130b]">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-velmora-line bg-velmora-bg/95 backdrop-blur-md">
          <form onSubmit={submitSearch} className="velmora-container flex items-center gap-3 py-4">
            <Search className="h-4 w-4 shrink-0 text-velmora-muted" strokeWidth={1.5} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, necklaces, huggies…"
              className="w-full bg-transparent font-body text-sm text-velmora-ink placeholder:text-velmora-muted/70 focus:outline-none"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="shrink-0 text-[10px] font-bold uppercase tracking-[0.28em] text-velmora-gold transition-colors hover:text-velmora-gold-light"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav
          className="border-t border-velmora-line bg-velmora-bg/95 backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >
          <div className="velmora-container flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="hairline-b py-4 font-display text-lg uppercase tracking-[0.24em] text-velmora-ink transition-colors last:border-0 hover:text-velmora-gold-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
