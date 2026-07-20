import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Gift%20Sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.requestAnimationFrame(() => setScrolled(window.scrollY > 24))
  }, [location.pathname, location.search])

  const solid = scrolled || !isHome || menuOpen
  const textClass = solid ? 'text-velmora-ink' : 'text-velmora-cream drop-shadow-[0_1px_12px_rgba(35,21,16,0.75)]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        solid
          ? 'border-velmora-blush bg-velmora-ivory/95 shadow-soft backdrop-blur-xl'
          : 'border-white/25 bg-gradient-to-b from-velmora-ink/55 to-transparent backdrop-blur-[2px]'
      } ${textClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className="font-serif text-3xl font-semibold tracking-[0.18em] text-current"
          aria-label="Velmora home"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold uppercase tracking-[0.22em] md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="transition-colors duration-300 hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="rounded-full p-2 transition-colors duration-300 hover:bg-velmora-champagne/20"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition-colors duration-300 hover:bg-velmora-champagne/20"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-xs font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-2 transition-colors duration-300 hover:bg-velmora-champagne/20 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-velmora-blush bg-velmora-ivory px-5 py-5 text-velmora-ink md:hidden">
          <nav className="grid gap-4 text-sm font-semibold uppercase tracking-[0.22em]">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="py-2">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
