import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ isScrolled, cartCount, onCartOpen, mobileOpen, setMobileOpen }) {
  const solid = isScrolled || mobileOpen

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'border-b border-mist bg-porcelain/95 text-espresso shadow-sm backdrop-blur-xl' : 'border-b border-espresso/10 bg-transparent text-espresso'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent transition hover:bg-current/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.22em] sm:text-3xl" onClick={() => setMobileOpen(false)}>
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent transition hover:bg-current/10 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent transition hover:bg-current/10"
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[0.65rem] font-bold text-pearl">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-mist bg-porcelain px-4 py-6 text-espresso shadow-soft lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="border-b border-mist pb-4 text-sm font-semibold uppercase tracking-[0.22em] text-espresso"
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
