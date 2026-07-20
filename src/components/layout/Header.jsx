import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const transparent = isHome && !scrolled && !mobileOpen
  const textColor = transparent ? 'text-velmora-ivory' : 'text-velmora-espresso'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'border-b border-velmora-mink/70 bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'
      }`}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ${textColor}`}>
        <button
          type="button"
          className="rounded-full p-2 transition hover:bg-velmora-mink/20 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-luxury transition hover:text-velmora-gold">
          VELMORA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-atelier transition hover:text-velmora-gold ${
                  isActive && !link.to.includes('#') ? 'text-velmora-gold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 transition hover:bg-velmora-mink/20" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 transition hover:bg-velmora-mink/20"
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-micro font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-mink/70 bg-velmora-ivory px-4 pb-5 text-velmora-espresso md:hidden">
          <div className="grid gap-1 pt-2">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-velmora-mink/60 py-4 text-sm font-bold uppercase tracking-luxury text-velmora-espresso"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
