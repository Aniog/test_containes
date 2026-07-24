import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const navClass = isTransparent
    ? 'border-velmora-ivory/20 bg-transparent text-velmora-ivory'
    : 'border-velmora-sand/80 bg-velmora-ivory/95 text-velmora-ink shadow-soft backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${navClass}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="rounded-full p-2 transition hover:bg-velmora-sand/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em]">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="font-sans text-xs font-semibold uppercase tracking-[0.28em] transition hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full p-2 transition hover:bg-velmora-sand/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:bg-velmora-sand/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 font-sans text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-sand bg-velmora-ivory px-6 py-6 text-velmora-ink lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
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

export default Header
