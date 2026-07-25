import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Gift%20Sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen || !isHome

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${solid ? 'border-velmora-line bg-velmora-ivory/95 text-velmora-espresso shadow-soft backdrop-blur-xl' : 'border-white/15 bg-transparent text-white'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" className="rounded-full p-2 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] sm:text-4xl">VELMORA</Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-2 transition hover:text-velmora-gold sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onOpenCart} className="relative rounded-full p-2 transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-white">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory text-velmora-espresso transition-all duration-300 lg:hidden ${menuOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-6 py-5" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className="border-b border-velmora-line py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-espresso">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
