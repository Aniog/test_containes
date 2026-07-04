import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = isScrolled || isMenuOpen || location.pathname !== '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${
        solid
          ? 'border-b border-velmora-cocoa/10 bg-velmora-porcelain/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
          : 'border-b border-white/15 bg-transparent text-white'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10" aria-label="Main navigation">
        <button
          type="button"
          className="inline-flex rounded-full p-2 text-current transition hover:bg-current/10 md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.18em] text-current">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-current/85 transition hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full p-2 text-current transition hover:bg-current/10 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 text-current transition hover:bg-current/10"
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-velmora-champagne px-1 font-sans text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-velmora-cocoa/10 bg-velmora-porcelain px-5 py-6 text-velmora-espresso md:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-velmora-cocoa/10 pb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-velmora-espresso"
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
