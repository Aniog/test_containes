import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from './CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=all' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  const navClasses = isHomeTop
    ? 'bg-transparent text-velmora-cream'
    : 'border-b border-velmora-champagne/25 bg-velmora-cream/95 text-velmora-ink shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navClasses}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-3 lg:hidden">
          <button
            type="button"
            className="rounded-full border border-current/30 p-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] lg:flex-1">
          VELMORA
        </Link>

        <div className="hidden items-center justify-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-luxury transition-colors hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Link
            to="/shop"
            className="hidden rounded-full border border-current/25 p-2 transition-colors hover:bg-current/10 sm:inline-flex"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-current/25 p-2 transition-colors hover:bg-current/10"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-velmora-champagne/25 bg-velmora-cream px-4 py-5 text-velmora-ink lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-velmora-champagne/20 py-4 text-sm font-bold uppercase tracking-luxury"
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
