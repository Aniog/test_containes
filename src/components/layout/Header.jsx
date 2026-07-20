import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=essentials' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
        isTransparent
          ? 'border-velmora-pearl/20 bg-transparent text-velmora-pearl'
          : 'border-velmora-line bg-velmora-ivory/95 text-velmora-ink shadow-[0_1px_0_rgba(216,201,180,0.45)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-5 sm:px-8 lg:px-12">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em]" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center justify-center gap-9 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="text-xs font-bold uppercase tracking-[0.24em] opacity-90 transition hover:opacity-100"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne md:inline-flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" strokeWidth={1.7} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.7} />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-ink">
                {itemCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory text-velmora-ink transition-all duration-300 lg:hidden ${mobileOpen ? 'max-h-96' : 'max-h-0 border-t-0'}`}>
        <nav className="grid gap-1 px-5 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="border-b border-velmora-line py-4 text-sm font-bold uppercase tracking-[0.24em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
