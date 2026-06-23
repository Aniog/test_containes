import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const shellClass = scrolled || menuOpen || !isHome ? 'bg-pearl text-ink shadow-[0_12px_45px_rgba(23,20,18,0.08)] backdrop-blur-xl' : 'bg-ink/35 text-porcelain backdrop-blur-sm'

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em]" aria-label="Velmora home">VELMORA</Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.label} to={item.to} className="text-xs font-semibold uppercase tracking-[0.26em] transition hover:text-champagne">{item.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-2 transition hover:bg-champagne/15 hover:text-champagne sm:inline-flex" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:bg-champagne/15 hover:text-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-bold text-ink">{cartCount}</span>}
          </button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-champagne/15 hover:text-champagne lg:hidden" aria-label="Toggle menu">{menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-sand bg-pearl text-ink transition-all duration-500 lg:hidden ${menuOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-4 py-5" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-sand py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ink">{item.label}</Link>)}
        </nav>
      </div>
    </header>
  )
}
