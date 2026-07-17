import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getCartCount } from '@/lib/cart'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?view=collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header({ cartItems, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen
  const count = getCartCount(cartItems)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${transparent ? 'bg-transparent text-velmora-ivory' : 'border-b border-velmora-oat/70 bg-velmora-pearl/95 text-velmora-cocoa shadow-sm backdrop-blur-xl'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.18em] text-current">VELMORA</Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-current/85 transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Search" className="rounded-full p-2.5 text-current transition hover:text-velmora-gold">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} aria-label="Open cart" className="relative rounded-full p-2.5 text-current transition hover:text-velmora-gold">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 font-sans text-[10px] font-bold text-velmora-ink">{count}</span>}
          </button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" className="rounded-full p-2.5 text-current transition hover:text-velmora-gold md:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-oat/70 bg-velmora-pearl text-velmora-cocoa transition-all duration-300 md:hidden ${menuOpen ? 'max-h-80' : 'max-h-0 border-t-0'}`}>
        <div className="grid gap-1 px-5 py-5">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className="border-b border-velmora-oat py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cocoa">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
