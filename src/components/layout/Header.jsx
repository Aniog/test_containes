import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCart } from '@/components/cart/CartContext'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const toneClass = transparent ? 'text-velmora-cream' : 'text-velmora-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        transparent
          ? 'border-velmora-cream/15 bg-transparent'
          : 'border-velmora-ink/10 bg-velmora-cream/95 shadow-sm backdrop-blur-xl'
      }`}
    >
      <nav className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 ${toneClass}`}>
        <button
          type="button"
          className="bg-transparent p-2 text-current md:hidden"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.18em] text-current md:min-w-36">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.26em] text-current opacity-85 transition hover:opacity-100"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 md:min-w-36">
          <button
            type="button"
            className="rounded-full bg-transparent p-2 text-current transition hover:bg-current/10"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full bg-transparent p-2 text-current transition hover:bg-current/10"
            aria-label="Open shopping cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/40 backdrop-blur-sm transition md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <aside
          className={`h-full w-[84%] max-w-sm bg-velmora-porcelain p-6 text-velmora-ink shadow-soft transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.18em] text-velmora-ink">
              VELMORA
            </Link>
            <button
              type="button"
              className="rounded-full border border-velmora-ink/15 bg-transparent p-2 text-velmora-ink"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-12 grid gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-velmora-ink/10 pb-5 font-serif text-3xl text-velmora-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </header>
  )
}
