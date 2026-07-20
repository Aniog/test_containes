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

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
      setSearchOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-stone/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors',
              solid ? 'text-charcoal' : 'text-cream'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* center links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-widest2 font-medium transition-colors hover:text-gold',
                solid ? 'text-charcoal' : 'text-cream/90'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* right icons */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className={cn('transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-cream')}
            aria-label="Search"
          >
            <Search size={19} />
          </button>
          <button
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-cream')}
            aria-label="Cart"
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* search bar */}
      {searchOpen && (
        <div className="absolute top-full inset-x-0 bg-cream border-b border-stone/50 animate-fade-in">
          <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center gap-3">
            <Search size={18} className="text-muted" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for earrings, necklaces, huggies…"
              className="flex-1 bg-transparent outline-none text-charcoal placeholder:text-muted text-sm tracking-wide"
            />
            <button type="submit" className="text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep">
              Search
            </button>
          </form>
        </div>
      )}

      {/* mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone/50 animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 text-charcoal hover:text-gold"
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
