import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?view=collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search, location.hash])

  const linkClass = transparent ? 'text-velmora-linen hover:text-velmora-brass' : 'text-velmora-ink hover:text-velmora-gold'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${transparent ? 'bg-transparent' : 'border-b border-velmora-border bg-velmora-linen/95 shadow-softGold backdrop-blur-xl'}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 md:px-8">
        <button
          type="button"
          className={`inline-flex items-center justify-center md:hidden ${linkClass}`}
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Open navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link to="/" className={`font-serifDisplay text-2xl tracking-[0.28em] transition ${linkClass}`}>
          VELMORA
        </Link>

        <nav className="hidden items-center justify-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={`text-xs font-semibold uppercase tracking-luxury transition ${linkClass}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <button type="button" aria-label="Search" className={`transition ${linkClass}`}>
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Open cart" onClick={onCartOpen} className={`relative transition ${linkClass}`}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-border bg-velmora-linen text-velmora-ink transition-all duration-500 md:hidden ${mobileOpen ? 'max-h-96' : 'max-h-0 border-t-0'}`}>
        <nav className="flex flex-col px-4 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="border-b border-velmora-border py-4 text-sm font-semibold uppercase tracking-luxury text-velmora-ink transition hover:text-velmora-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
