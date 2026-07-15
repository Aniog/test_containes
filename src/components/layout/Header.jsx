import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop#collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { cartCount, openCart } = useCart()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-champagne ${
      isActive ? 'text-velmora-champagne' : solid ? 'text-velmora-espresso' : 'text-velmora-porcelain'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        solid
          ? 'border-b border-velmora-linen/80 bg-velmora-porcelain/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
          : 'border-b border-velmora-porcelain/15 bg-transparent text-velmora-porcelain'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="rounded-full border border-current/25 p-2 transition hover:border-velmora-champagne hover:text-velmora-champagne"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em] md:text-4xl">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.href} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="rounded-full p-2 transition hover:text-velmora-champagne"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 transition hover:text-velmora-champagne"
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="border-t border-velmora-linen bg-velmora-porcelain px-5 py-5 text-velmora-espresso shadow-soft">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className="text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-antique"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
