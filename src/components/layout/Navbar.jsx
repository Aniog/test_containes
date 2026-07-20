import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=gift' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const solid = !isHome || scrolled || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${solid ? 'border-velmora-espresso/10 bg-velmora-porcelain/95 text-velmora-espresso shadow-sm backdrop-blur' : 'border-white/15 bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <button type="button" className="rounded-full p-2 text-current md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.24em] text-current md:text-3xl">VELMORA</Link>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="text-xs font-semibold uppercase tracking-[0.22em] text-current/85 transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-onyx">{cartCount}</span>}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-velmora-espresso/10 bg-velmora-porcelain px-5 py-5 text-velmora-espresso md:hidden">
          {links.map((link) => <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold uppercase tracking-[0.22em]">{link.label}</Link>)}
        </div>
      )}
    </header>
  )
}
