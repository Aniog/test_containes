import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${
        solid
          ? 'border-b border-velmora-mist/80 bg-velmora-cream/95 text-velmora-espresso shadow-[0_10px_40px_rgba(36,25,21,0.06)] backdrop-blur-xl'
          : 'bg-transparent text-velmora-cream'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em] text-current">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-champagne ${
                  isActive && item.to === '/shop' ? 'text-velmora-champagne' : 'text-current'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Search Velmora"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label={`Open cart with ${cartCount} items`}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-oxblood px-1 text-[0.65rem] font-bold text-velmora-cream ring-2 ring-velmora-cream">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 focus:outline-none focus:ring-2 focus:ring-velmora-champagne lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-mist bg-velmora-cream px-4 py-6 text-velmora-espresso lg:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="border-b border-velmora-mist pb-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-oxblood"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
