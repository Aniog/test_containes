import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const isSolid = !isHome || scrolled || mobileOpen

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${isSolid ? 'border-b border-velmora-espresso/10 bg-velmora-parchment/95 text-velmora-espresso shadow-nav backdrop-blur' : 'bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex flex-1 items-center lg:hidden">
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-current/30 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="flex-1 font-serif text-3xl font-semibold tracking-luxury text-current lg:flex-none">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-couture text-current/85 transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 lg:flex-none">
          <button type="button" className="hidden rounded-full border border-current/30 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full border border-current/30 p-2 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-xs font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-espresso/10 bg-velmora-parchment text-velmora-espresso transition-all duration-500 lg:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <div className="space-y-1 px-5 py-5">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="block border-b border-velmora-espresso/10 py-4 text-sm font-semibold uppercase tracking-refined text-velmora-espresso">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
