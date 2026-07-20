import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/lib/cart'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=bestsellers' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const navColor = isTransparent
    ? 'text-white drop-shadow-[0_2px_12px_rgba(25,19,15,0.85)]'
    : 'text-velmora-espresso'
  const navSurface = isTransparent
    ? 'bg-transparent border-white/0'
    : 'bg-velmora-pearl/95 border-velmora-espresso/10 shadow-[0_10px_40px_rgba(44,32,24,0.07)] backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${navSurface}`}>
      <nav className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8 ${navColor}`} aria-label="Main navigation">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent transition hover:bg-current/10 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.22em] lg:text-3xl" aria-label="Velmora home">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-luxury opacity-90 transition hover:opacity-100"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-current/10"
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent transition hover:bg-current/10"
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </nav>

      <div className={`${menuOpen ? 'grid' : 'hidden'} border-t border-velmora-espresso/10 bg-velmora-pearl px-4 py-5 text-velmora-espresso lg:hidden`}>
        {links.map((link) => (
          <NavLink key={link.label} to={link.to} className="border-b border-velmora-espresso/10 py-4 text-sm font-semibold uppercase tracking-luxury">
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
