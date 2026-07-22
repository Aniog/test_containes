import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/components/layout/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 32)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const surfaceClass = isScrolled || isMobileOpen || !isHome
    ? 'bg-velmora-cream/95 text-velmora-ink shadow-sm backdrop-blur-xl border-velmora-mist'
    : 'bg-transparent text-velmora-porcelain border-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${surfaceClass}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-current/20 bg-transparent text-current transition hover:border-velmora-gold hover:text-velmora-gold md:hidden"
          aria-label="Open menu"
          onClick={() => setIsMobileOpen((value) => !value)}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl tracking-luxe text-current" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-luxe text-current/90 transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center border border-current/20 bg-transparent text-current transition hover:border-velmora-gold hover:text-velmora-gold sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center border border-current/20 bg-transparent text-current transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Open cart"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.68rem] font-bold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <nav className="border-t border-velmora-mist bg-velmora-cream px-5 py-5 text-velmora-ink md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="border-b border-velmora-mist pb-4 text-sm font-semibold uppercase tracking-luxe text-velmora-ink"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
