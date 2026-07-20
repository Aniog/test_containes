import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?view=collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const textClass = transparent ? 'text-velmora-ivory' : 'text-velmora-ink'
  const navSurface = transparent
    ? 'border-transparent bg-transparent'
    : 'border-velmora-sand/70 bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed left-0 right-0 top-0 z-30 border-b transition duration-500 ${navSurface}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className={`font-serif text-3xl tracking-[0.22em] transition ${textClass}`}>
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-ui transition hover:text-velmora-gold ${textClass} ${isActive ? 'text-velmora-gold' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-2 ${textClass}`}>
          <button
            type="button"
            className="hidden rounded-full bg-transparent p-2 transition hover:text-velmora-gold sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full bg-transparent p-2 transition hover:text-velmora-gold"
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
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full bg-transparent p-2 transition hover:text-velmora-gold lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-velmora-sand bg-velmora-ivory px-4 py-5 text-velmora-ink lg:hidden">
          <nav className="grid gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="font-serif text-3xl text-velmora-ink">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
