import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !scrolled
  const navTone = isHomeTop ? 'text-velmora-ivory' : 'text-velmora-ink'

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isHomeTop ? 'bg-transparent' : 'border-b border-velmora-linen bg-velmora-ivory/95 shadow-soft backdrop-blur-md'}`}>
      <nav className={`velmora-container flex h-18 items-center justify-between ${navTone}`} aria-label="Main navigation">
        <button type="button" onClick={() => setMenuOpen(true)} className="lg:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="font-serif text-3xl tracking-wide lg:w-44">VELMORA</Link>
        <div className="hidden items-center justify-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-nav transition-colors hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 lg:w-44">
          <button type="button" className="hidden transition-colors hover:text-velmora-gold sm:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative transition-colors hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 ? <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ivory">{cartCount}</span> : null}
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-50 bg-velmora-ink/45 transition-opacity duration-300 lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <aside className={`h-full w-80 max-w-[86vw] bg-velmora-ivory p-6 text-velmora-ink shadow-velmora transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <p className="font-serif text-3xl">VELMORA</p>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
          </div>
          <div className="mt-10 flex flex-col gap-5">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="border-b border-velmora-linen pb-4 text-sm font-semibold uppercase tracking-nav text-velmora-ink">
                {link.label}
              </NavLink>
            ))}
          </div>
        </aside>
      </div>
    </header>
  )
}
