import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'
  const headerSolid = !isHome || isScrolled || isMenuOpen

  const linkClass = ({ isActive }) =>
    `text-[0.72rem] font-bold uppercase tracking-[0.24em] transition hover:text-velmora-gold ${
      isActive ? 'text-velmora-gold' : headerSolid ? 'text-velmora-espresso' : 'text-velmora-ivory'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${
        headerSolid
          ? 'border-velmora-cocoa/10 bg-velmora-porcelain/95 text-velmora-espresso shadow-[0_20px_60px_rgba(33,23,19,0.08)] backdrop-blur-xl'
          : 'border-velmora-ivory/15 bg-transparent text-velmora-ivory'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`font-serif text-3xl font-semibold tracking-[0.18em] transition ${
            headerSolid ? 'text-velmora-espresso' : 'text-velmora-ivory'
          }`}
          aria-label="Velmora Fine Jewelry home"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`hidden rounded-full bg-transparent p-3 transition hover:text-velmora-gold sm:inline-flex ${
              headerSolid ? 'text-velmora-espresso' : 'text-velmora-ivory'
            }`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className={`relative rounded-full bg-transparent p-3 transition hover:text-velmora-gold ${
              headerSolid ? 'text-velmora-espresso' : 'text-velmora-ivory'
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.62rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`rounded-full bg-transparent p-3 transition hover:text-velmora-gold lg:hidden ${
              headerSolid ? 'text-velmora-espresso' : 'text-velmora-ivory'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-velmora-cocoa/10 bg-velmora-porcelain text-velmora-espresso transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="grid gap-1 px-4 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-champagne hover:text-velmora-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
