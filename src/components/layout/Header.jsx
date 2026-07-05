import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ isScrolled, cartCount, onOpenCart, mobileOpen, setMobileOpen }) {
  const solid = isScrolled || mobileOpen

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${solid ? 'bg-velmora-pearl/95 text-velmora-ink shadow-sm backdrop-blur-xl' : 'bg-transparent text-velmora-pearl'}`}>
      <div className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-4 transition duration-500 sm:px-6 lg:px-8 ${solid ? 'border-b border-velmora-mist/80' : 'border-b border-white/15'}`}>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/25 transition hover:border-velmora-champagne lg:hidden"
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] sm:text-4xl" onClick={() => setMobileOpen(false)}>
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-[0.24em] opacity-90 transition hover:text-velmora-champagne hover:opacity-100"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="hidden h-11 w-11 items-center justify-center rounded-full border border-current/25 transition hover:border-velmora-champagne sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onOpenCart} className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/25 transition hover:border-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.62rem] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-b border-velmora-mist bg-velmora-pearl text-velmora-ink transition-all duration-500 lg:hidden ${mobileOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-4 py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="border-b border-velmora-mist px-2 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-cocoa transition hover:text-velmora-antique"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
