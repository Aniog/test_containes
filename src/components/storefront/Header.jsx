import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const solid = isScrolled || !isHome || isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const textTone = solid ? 'text-velmora-ink' : 'text-velmora-ivory drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        solid
          ? 'border-velmora-hairline/80 bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'
          : 'border-velmora-ivory/20 bg-velmora-espresso/20 backdrop-blur-[2px]'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`font-serifDisplay text-3xl font-semibold tracking-emblem transition ${textTone}`}
          aria-label="Velmora homepage"
        >
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-luxury transition hover:text-velmora-gold ${
                  isActive && item.to === pathname ? 'text-velmora-gold' : textTone
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`rounded-full p-3 transition hover:bg-velmora-gold/15 hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold ${textTone}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className={`relative rounded-full p-3 transition hover:bg-velmora-gold/15 hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold ${textTone}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`rounded-full p-3 transition hover:bg-velmora-gold/15 hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold lg:hidden ${textTone}`}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-velmora-hairline bg-velmora-ivory px-4 py-5 text-velmora-ink lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-luxury transition hover:bg-velmora-champagne"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
