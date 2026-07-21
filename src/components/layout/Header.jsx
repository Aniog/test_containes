import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=gift' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 28)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const linkClass = transparent
    ? 'text-velmora-cream hover:text-velmora-champagne'
    : 'text-velmora-ink hover:text-velmora-gold'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
        transparent
          ? 'border-white/15 bg-transparent'
          : 'border-velmora-stone bg-velmora-cream/95 shadow-[0_10px_35px_rgba(48,35,26,0.06)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.2em] transition ${transparent ? 'text-velmora-cream' : 'text-velmora-ink'}`}
          aria-label="Velmora home"
        >
          VELMORA
        </Link>

        <nav className="hidden justify-center gap-10 lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <NavLink key={item.label} to={item.href} className={`text-xs font-semibold uppercase tracking-[0.22em] transition ${linkClass}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center justify-end gap-2 ${transparent ? 'text-velmora-cream' : 'text-velmora-ink'}`}>
          <button
            type="button"
            className={`hidden rounded-full p-2 transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne sm:inline-flex ${transparent ? 'text-velmora-cream' : 'text-velmora-ink'}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className={`relative rounded-full p-2 transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${transparent ? 'text-velmora-cream' : 'text-velmora-ink'}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`rounded-full p-2 transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne lg:hidden ${transparent ? 'text-velmora-cream' : 'text-velmora-ink'}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-velmora-stone bg-velmora-cream px-5 pb-6 pt-2 text-velmora-ink shadow-xl lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <NavLink key={item.label} to={item.href} className="rounded-2xl px-3 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-stone">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
