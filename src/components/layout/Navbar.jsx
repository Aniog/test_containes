import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  // Transparent over hero (homepage top), solid elsewhere / on scroll.
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
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxury',
        solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-line text-ink'
          : 'bg-transparent text-cream',
      )}
    >
      <nav className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-6 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X width={22} height={22} /> : <Menu width={22} height={22} />}
            </button>
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.3em] font-medium select-none"
          >
            VELMORA
          </Link>

          {/* Right: links + icons */}
          <div className="flex items-center gap-5 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(2).map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              className="p-1 transition-opacity hover:opacity-60"
            >
              <Search width={20} height={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-1 transition-opacity hover:opacity-60"
            >
              <ShoppingBag width={20} height={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-champagne text-cream text-[10px] font-medium min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 fade-in">
            <form onSubmit={onSearchSubmit} className="flex items-center gap-3 border-b border-current/30 pb-2">
              <Search width={18} height={18} strokeWidth={1.5} className="opacity-60" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewelry…"
                className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-50"
              />
            </form>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream text-ink border-t border-line fade-in">
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 text-sm tracking-[0.2em] uppercase border-b border-line/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ label, to }) {
  return (
    <Link
      to={to}
      className="text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
    >
      {label}
    </Link>
  )
}
