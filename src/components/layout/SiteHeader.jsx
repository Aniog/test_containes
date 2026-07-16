import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/store/CartProvider'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function SiteHeader() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'
  const useTransparentHeader = isHome && !scrolled && !mobileOpen
  const headerClasses = useTransparentHeader
    ? 'bg-transparent text-velmora-paper'
    : 'bg-velmora-paper/95 text-velmora-ink shadow-velmora-card backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-500 ${
      scrolled || mobileOpen ? 'border-velmora-line/70' : 'border-transparent'
    } ${headerClasses}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full border border-current/20 p-2"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl tracking-[0.35em] sm:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs uppercase tracking-editorial transition hover:text-velmora-accent"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full border border-current/20 p-2 transition hover:border-velmora-accent hover:text-velmora-accent"
            aria-label="Search"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-current/20 p-2 transition hover:border-velmora-accent hover:text-velmora-accent"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-accent px-1 text-[10px] font-semibold text-velmora-ink">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-velmora-line/70 bg-velmora-paper text-velmora-ink transition-[max-height] duration-500 lg:hidden ${
          mobileOpen ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="border-b border-velmora-line/70 py-4 text-sm uppercase tracking-editorial text-velmora-ink last:border-b-0"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
