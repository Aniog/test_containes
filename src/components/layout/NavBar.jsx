import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../cart/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=heirloom' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { totals, openCart } = useCart()
  const solidNav = pathname !== '/' || scrolled || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navTone = solidNav ? 'bg-velmora-pearl/95 !text-velmora-ink shadow-sm backdrop-blur-xl' : 'bg-transparent !text-velmora-pearl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${solidNav ? 'border-velmora-linen' : 'border-velmora-pearl/20'} ${navTone}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.2em] md:text-4xl">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.28em] transition hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-3 transition hover:text-velmora-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={openCart} className="relative rounded-full p-3 transition hover:text-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {totals.count > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {totals.count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-3 transition hover:text-velmora-champagne md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden bg-velmora-pearl text-velmora-ink transition-all duration-500 md:hidden ${menuOpen ? 'max-h-96 border-t border-velmora-linen' : 'max-h-0'}`}>
        <div className="space-y-1 px-5 py-5">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-velmora-linen py-4 font-serif text-2xl text-velmora-ink"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
