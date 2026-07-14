import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?focus=collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const solid = !isHome || isScrolled || isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        solid
          ? 'border-velmora-espresso/10 bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'
          : 'border-velmora-ivory/15 bg-transparent text-velmora-ivory'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-current/20 text-current transition hover:bg-current/10 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-widerLuxury text-current focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-luxe text-current/86 transition hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/shop"
            className="hidden h-11 w-11 items-center justify-center border border-current/20 text-current transition hover:bg-current/10 sm:inline-flex"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center border border-current/20 text-current transition hover:bg-current/10 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-velmora-espresso/10 bg-velmora-ivory px-5 py-5 text-velmora-ink shadow-soft lg:hidden">
          <div className="grid gap-3">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="border-b border-velmora-espresso/10 py-3 text-sm font-bold uppercase tracking-luxe">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
