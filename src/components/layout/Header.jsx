import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  {
    label: 'Shop',
    to: '/shop',
    isActive: ({ pathname }) => pathname === '/shop' || pathname.startsWith('/product/'),
  },
  { label: 'Collections', to: '/shop', isActive: () => false },
  { label: 'About', to: '/about', isActive: ({ pathname }) => pathname === '/about' },
  { label: 'Journal', to: '/journal', isActive: ({ pathname }) => pathname === '/journal' },
]

const Header = () => {
  const location = useLocation()
  const { pathname, search } = location
  const { cartCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpenCart = () => {
    setMenuOpen(false)
    openCart()
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, search])

  const isHome = pathname === '/'

  const headerClasses = useMemo(() => {
    if (isHome && !scrolled) {
      return 'border-transparent bg-gradient-to-b from-velmora-espresso/55 via-velmora-espresso/18 to-transparent text-white'
    }

    return 'border-velmora-line/80 bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'
  }, [isHome, scrolled])

  const linkBase =
    'text-xs uppercase tracking-[0.34em] transition duration-300 hover:text-velmora-champagne'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${headerClasses}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            to="/"
            className="font-display text-3xl tracking-[0.4em] text-current md:flex-1"
          >
            VELMORA
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={() =>
                  `${linkBase} ${item.isActive(location) ? 'text-velmora-champagne' : 'text-current'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 md:flex-1">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 text-current transition duration-300 hover:border-velmora-champagne hover:text-velmora-champagne"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleOpenCart}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 text-current transition duration-300 hover:border-velmora-champagne hover:text-velmora-champagne"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-semibold text-velmora-espresso">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-current/10 bg-velmora-ivory text-velmora-ink transition-all duration-300 md:hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}
        >
          <nav className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={() =>
                  `border-b border-velmora-line/70 py-4 text-xs uppercase tracking-[0.34em] ${item.isActive(location) ? 'text-velmora-champagne' : 'text-velmora-ink'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-[76px] md:h-[84px]" />
    </>
  )
}

export default Header
