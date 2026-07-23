import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname, location.search, location.hash])

  const navClass = isHomeTop
    ? 'border-white/10 bg-transparent text-velmora-pearl'
    : 'border-velmora-sand/80 bg-velmora-cream/92 text-velmora-ink shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-500 ${navClass}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-12" aria-label="Primary navigation">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.24em] md:text-3xl">VELMORA</Link>
        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-bold uppercase tracking-[0.24em] opacity-90 transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-3 transition hover:bg-velmora-sand/30 md:inline-flex" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button type="button" onClick={onCartClick} className="relative rounded-full p-3 transition hover:bg-velmora-sand/30" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-pearl">{cartCount}</span>}
          </button>
          <button type="button" onClick={() => setOpen(!open)} className="rounded-full p-3 transition hover:bg-velmora-sand/30 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <div className={`overflow-hidden border-t border-velmora-sand/60 bg-velmora-pearl text-velmora-ink transition-all duration-300 lg:hidden ${open ? 'max-h-80' : 'max-h-0 border-t-0'}`}>
        <div className="space-y-1 px-5 py-5">
          {links.map((link) => (
            <Link key={link.label} to={link.to} className="block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] hover:bg-velmora-sand/40">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
