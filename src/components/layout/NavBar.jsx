import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?material=18K%20Gold%20Plated' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const navText = solid ? 'text-velmora-ink' : 'text-velmora-pearl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? 'border-b border-velmora-sand bg-velmora-pearl/95 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="velmora-container flex h-20 items-center justify-between gap-5">
        <Link to="/" className={`font-serif text-3xl font-semibold tracking-[0.20em] ${navText}`} aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className={`hidden items-center gap-9 text-xs font-bold uppercase tracking-[0.22em] lg:flex ${navText}`} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-2 ${navText}`}>
          <button type="button" className="hidden rounded-full p-2 transition hover:text-velmora-gold sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMobileOpen((value) => !value)} className="rounded-full p-2 transition hover:text-velmora-gold lg:hidden" aria-label="Open menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-velmora-sand bg-velmora-pearl px-5 py-6 text-velmora-ink lg:hidden">
          <nav className="grid gap-4 text-sm font-bold uppercase tracking-[0.22em]" aria-label="Mobile navigation">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="py-2 transition hover:text-velmora-gold">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
