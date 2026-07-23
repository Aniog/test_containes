import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const linkClass = solid ? 'text-velmora-ink hover:text-velmora-gold' : 'text-velmora-ivory hover:text-velmora-champagne'
  const iconHoverClass = solid ? 'hover:bg-velmora-champagne/70' : 'hover:bg-velmora-ivory/15'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        solid
          ? 'border-b border-velmora-line/80 bg-velmora-porcelain/95 text-velmora-ink shadow-sm backdrop-blur-xl'
          : 'bg-velmora-ink/20 text-velmora-ivory backdrop-blur-[2px]'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-current">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.26em] transition ${linkClass} ${
                  isActive && link.to === '/shop' ? 'text-velmora-gold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`hidden rounded-full p-2.5 transition sm:inline-flex ${iconHoverClass}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className={`relative rounded-full p-2.5 transition ${iconHoverClass}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className={`rounded-full p-2.5 transition md:hidden ${iconHoverClass}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-velmora-line/70 bg-velmora-porcelain text-velmora-ink transition-all duration-500 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="grid gap-1 px-5 py-5" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="border-b border-velmora-line/60 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
