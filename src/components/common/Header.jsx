import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const solid = scrolled || pathname !== '/' || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'bg-velmora-ivory/95 text-velmora-ink shadow-soft backdrop-blur-xl' : 'bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em]" onClick={() => setMenuOpen(false)}>VELMORA</Link>
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => <NavLink key={item.label} to={item.to} className="text-xs font-bold uppercase tracking-[0.28em] transition hover:text-velmora-gold">{item.label}</NavLink>)}
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="hidden rounded-full p-2 transition hover:bg-velmora-champagne/25 sm:inline-flex" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:bg-velmora-champagne/25" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">{cartCount}</span>}
          </button>
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-champagne/25 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-velmora-line bg-velmora-ivory px-4 pb-6 text-velmora-ink md:hidden">
          <div className="grid gap-2 pt-3">
            {navItems.map((item) => <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-velmora-line py-4 text-sm font-bold uppercase tracking-[0.26em]">{item.label}</Link>)}
          </div>
        </div>
      )}
    </header>
  )
}
