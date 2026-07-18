import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = !isHome || scrolled || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname, location.search])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'border-b border-velmora-line bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur' : 'text-velmora-ivory'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.16em]" aria-label="Velmora home">VELMORA</Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={({ isActive }) => `text-xs font-semibold uppercase tracking-luxe transition hover:text-velmora-gold ${isActive ? 'text-velmora-gold' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-3 transition hover:bg-velmora-champagne/80 hover:text-velmora-bronze" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-3 transition hover:bg-velmora-champagne/80 hover:text-velmora-bronze" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">{cartCount}</span>}
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-3 transition hover:bg-velmora-champagne/80 hover:text-velmora-bronze lg:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory text-velmora-ink transition-all duration-300 lg:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-5 py-5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="border-b border-velmora-line py-4 text-sm font-semibold uppercase tracking-luxe text-velmora-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
