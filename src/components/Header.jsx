import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from './CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { cartCount, setIsCartOpen } = useCart()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solid = !isHome || isScrolled || isMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${
        solid
          ? 'border-b border-velmora-linen bg-velmora-ivory/95 text-velmora-umber shadow-sm backdrop-blur-xl'
          : 'border-b border-white/15 bg-transparent text-velmora-ivory'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
        <div className="flex items-center gap-4 lg:flex-1">
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded-full border border-current/25 p-2 transition hover:border-velmora-champagne lg:hidden"
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.16em]" onClick={() => setIsMenuOpen(false)}>
            VELMORA
          </Link>
        </div>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-luxe transition hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 lg:flex-1">
          <button type="button" className="rounded-full p-2 transition hover:text-velmora-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full p-2 transition hover:text-velmora-champagne"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-obsidian">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-linen bg-velmora-ivory text-velmora-umber transition-all duration-300 lg:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <div className="space-y-1 px-5 py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-velmora-linen py-4 text-sm font-semibold uppercase tracking-luxe text-velmora-umber"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
