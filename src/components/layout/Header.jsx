import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const { itemCount, setIsCartOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const textColor = isTransparent ? 'text-velmora-cream' : 'text-velmora-espresso'
  const navSurface = isTransparent ? 'bg-transparent' : 'border-b border-velmora-linen bg-velmora-ivory/95 shadow-[0_1px_0_rgba(36,25,20,0.04)] backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navSurface}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-full border border-current/25 p-2 transition hover:bg-velmora-champagne/15 lg:hidden ${textColor}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className={`font-serif text-2xl tracking-[0.32em] transition ${textColor}`} aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-velmora-champagne ${textColor} ${isActive && item.to === location.pathname ? 'text-velmora-champagne' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-3 ${textColor}`}>
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-champagne/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-velmora-linen bg-velmora-ivory px-5 py-6 text-velmora-espresso shadow-editorial lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-espresso">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
