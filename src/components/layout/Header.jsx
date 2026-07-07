import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${solid ? 'border-velmora-mist bg-velmora-ivory/95 text-velmora-ink shadow-[0_12px_40px_rgba(33,24,22,0.08)] backdrop-blur-xl' : 'border-white/10 bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl tracking-[0.2em] text-current">VELMORA</Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className="text-xs font-semibold uppercase tracking-[0.26em] text-current/85 transition hover:text-velmora-champagne">
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-full p-3 text-current transition hover:bg-velmora-champagne/15 sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button onClick={onCartOpen} className="relative rounded-full p-3 text-current transition hover:bg-velmora-champagne/15" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">{cartCount}</span>}
          </button>
          <button onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-3 text-current transition hover:bg-velmora-champagne/15 md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-velmora-mist bg-velmora-ivory px-4 py-6 text-velmora-ink md:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="border-b border-velmora-mist pb-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
