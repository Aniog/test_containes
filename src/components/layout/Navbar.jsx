import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/'
  const solid = !isHome || isScrolled || isMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
        solid
          ? 'border-velmora-champagne/80 bg-velmora-ivory/95 text-velmora-ink shadow-[0_12px_30px_rgba(31,26,23,0.06)] backdrop-blur-xl'
          : 'border-transparent bg-transparent text-velmora-cream'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12" aria-label="Main navigation">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-current/30 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] md:text-4xl">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="font-sans text-xs font-semibold uppercase tracking-[0.22em] transition hover:text-velmora-bronze"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center transition hover:text-velmora-bronze" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center transition hover:text-velmora-bronze"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-bronze px-1 font-sans text-[0.65rem] font-bold text-velmora-cream">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-velmora-champagne/80 bg-velmora-ivory px-5 pb-6 text-velmora-ink md:hidden">
          <div className="grid gap-2 pt-4">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-velmora-champagne/70 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
