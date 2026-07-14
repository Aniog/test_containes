import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const solid = !isHome || isScrolled || isMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        solid
          ? 'border-velmora-linen bg-velmora-porcelain/95 text-velmora-ink shadow-soft backdrop-blur-xl'
          : 'velmora-transparent-nav border-velmora-porcelain/15 bg-transparent text-velmora-porcelain'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button
          type="button"
          className="rounded-full p-2 text-current transition hover:text-velmora-gold lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-velmora text-current sm:text-3xl">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-velmora text-current/90 transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative rounded-full p-2 text-current transition hover:text-velmora-gold" onClick={openCart} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-xs font-bold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-velmora-linen bg-velmora-porcelain px-4 pb-5 text-velmora-ink lg:hidden`}>
        <div className="flex flex-col gap-1 pt-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-velmora-linen py-4 text-sm font-semibold uppercase tracking-velmora text-velmora-ink"
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
