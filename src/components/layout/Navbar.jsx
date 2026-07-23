import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { getCartCount } from '@/lib/cart'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=edit' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar({ cartItems, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = !isHome || scrolled || menuOpen
  const cartCount = getCartCount(cartItems)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-[0.22em] transition hover:text-velmora-gold ${
      isActive ? 'text-velmora-gold' : solid ? 'text-velmora-onyx' : 'text-velmora-ivory'
    }`

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${solid ? 'bg-velmora-ivory/95 shadow-sm backdrop-blur text-velmora-onyx' : 'bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-2 transition hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-current" aria-label="Velmora home">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            link.to.includes('#') ? (
              <a key={link.label} href={link.to} className={`text-xs font-bold uppercase tracking-[0.22em] transition hover:text-velmora-gold ${solid ? 'text-velmora-onyx' : 'text-velmora-ivory'}`}>
                {link.label}
              </a>
            ) : (
              <NavLink key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            )
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/shop" className="rounded-full p-2 transition hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold" aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:text-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-extrabold text-velmora-onyx">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} border-t border-velmora-mist bg-velmora-ivory px-5 py-5 text-velmora-onyx shadow-velmora-soft`}>
        <div className="grid gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="text-sm font-bold uppercase tracking-[0.24em] text-velmora-onyx transition hover:text-velmora-gold">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
