import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { getCartCount } from '@/lib/cart'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartItems, onCartOpen }) {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const cartCount = getCartCount(cartItems)

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 40 || !isHome)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => setMobileOpen(false), [location.pathname, location.search])

  const isTransparent = isHome && !solid && !mobileOpen
  const textColor = isTransparent ? 'text-velmora-pearl' : 'text-velmora-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        isTransparent
          ? 'border-velmora-pearl/20 bg-velmora-ink/28 backdrop-blur-sm'
          : 'border-velmora-mist/80 bg-velmora-pearl/95 shadow-soft backdrop-blur-xl'
      }`}
    >
      <nav className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 ${textColor}`}>
        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.24em] text-current sm:text-3xl">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs font-bold uppercase tracking-[0.22em] text-current/82 transition hover:text-velmora-champagne"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 hover:text-velmora-champagne"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className="relative rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 hover:text-velmora-champagne"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2 text-current transition hover:bg-velmora-champagne/15 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-mist bg-velmora-pearl px-5 py-5 text-velmora-ink shadow-soft lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-velmora-linen"
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
