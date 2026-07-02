import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.search])

  const solid = scrolled || !isHome || menuOpen
  const cartLabel = useMemo(() => `${cartCount} item${cartCount === 1 ? '' : 's'} in cart`, [cartCount])

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b transition-all duration-500"
      data-solid={solid}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <button
          type="button"
          className="rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-luxury text-current" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-widerLuxury transition">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/shop" className="rounded-full p-2 transition hover:bg-velmora-champagne/15" aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15"
            aria-label={cartLabel}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-velmora-stone/70 bg-velmora-ivory px-4 pb-6 pt-2 text-velmora-ink shadow-soft md:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-luxury text-velmora-taupe hover:bg-velmora-sand hover:text-velmora-ink">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
