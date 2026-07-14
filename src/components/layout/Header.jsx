import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const Header = ({ cartCount, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        solid
          ? 'border-velmora-hairline bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'
          : 'border-white/15 bg-transparent text-velmora-pearl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.16em] text-current md:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-widest text-current/85 transition hover:text-velmora-brass"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full p-3 text-current transition hover:bg-velmora-brass/10 hover:text-velmora-brass md:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-3 text-current transition hover:bg-velmora-brass/10 hover:text-velmora-brass"
            aria-label={`Open cart with ${cartCount} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-brass px-1 text-[10px] font-bold text-velmora-pearl">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-3 text-current transition hover:bg-velmora-brass/10 hover:text-velmora-brass md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-velmora-hairline bg-velmora-ivory px-5 py-5 text-velmora-ink md:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-velmora-hairline py-4 text-sm font-semibold uppercase tracking-widest text-velmora-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
