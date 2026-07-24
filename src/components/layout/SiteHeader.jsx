import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'

const navItems = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?collection=earrings', label: 'Collections' },
  { to: '/#our-story', label: 'About' },
  { to: '/#journal', label: 'Journal' },
]

export default function SiteHeader({ onOpenSearch }) {
  const { itemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search, location.hash])

  const isHome = location.pathname === '/'
  const headerSolid = !isHome || scrolled || mobileOpen
  const headerClass = headerSolid
    ? 'border-b border-velmora-line/20 bg-velmora-ink/95 text-velmora-cream shadow-soft backdrop-blur-xl'
    : 'bg-transparent text-velmora-cream'

  return (
    <header className={`sticky top-0 z-30 transition duration-500 ease-luxe ${headerClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="rounded-full border border-white/20 p-2 text-current transition hover:bg-white/10"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.45em] text-current sm:text-3xl"
        >
          VELMORA
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-10 text-xs uppercase tracking-[0.3em]">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-velmora-gold ${isActive ? 'text-velmora-gold' : 'text-current/88'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="rounded-full border border-white/20 p-2 text-current transition hover:bg-white/10"
            aria-label="Open search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full border border-white/20 p-2 text-current transition hover:bg-white/10"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.6rem] font-medium text-velmora-ink">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-500 ease-luxe lg:hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-2 px-4 py-4 text-xs uppercase tracking-[0.28em] text-velmora-cream sm:px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 transition hover:bg-white/10 ${
                  isActive ? 'bg-white/10 text-velmora-gold' : 'text-current/85'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
