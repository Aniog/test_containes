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

  // Transparent over hero only on the homepage top; solid elsewhere.
  const isHome = location.pathname === '/'
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
          ? 'bg-cream/95 backdrop-blur-md border-b border-hairline text-ink'
          : 'bg-transparent text-cream'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.25em] leading-none"
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
              className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hover:text-gold transition-colors duration-300"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-hairline bg-cream">
          <form
            onSubmit={onSearchSubmit}
            className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center gap-3"
          >
            <Search className="w-4 h-4 text-stone" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, necklaces, huggies…"
              className="flex-1 bg-transparent text-sm text-ink placeholder:text-stone outline-none"
            />
            <button
              type="submit"
              className="text-[11px] uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-cream">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 text-sm uppercase tracking-[0.2em] text-ink border-b border-hairline last:border-0"
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
