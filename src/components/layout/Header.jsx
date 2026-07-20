import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const { count, setIsOpen } = useCart()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome || menuOpen
  const textColor = solid ? 'text-cocoa' : 'text-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? 'border-b border-mist/70 bg-parchment/95 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 transition ${textColor} lg:px-10`} aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em]" onClick={() => setMenuOpen(false)}>VELMORA</Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-luxe transition hover:text-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-3 transition hover:bg-champagne/15" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative rounded-full p-3 transition hover:bg-champagne/15" aria-label="Open cart" onClick={() => setIsOpen(true)}>
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-champagne px-1 text-[10px] font-bold text-espresso">{count}</span>}
          </button>
          <button type="button" className="rounded-full p-3 transition hover:bg-champagne/15 md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-mist bg-parchment px-5 py-6 text-cocoa md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="text-sm font-semibold uppercase tracking-luxe" onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
