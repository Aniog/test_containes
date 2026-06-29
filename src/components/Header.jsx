import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { getCartItemCount } from '../lib/cart.js'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ cartItems, onCartOpen, isMenuOpen, setIsMenuOpen, isScrolled, overlayHeader = false }) {
  const count = getCartItemCount(cartItems)
  const solid = !overlayHeader || isScrolled || isMenuOpen
  const iconButtonClass = solid
    ? 'p-2 text-velmora-ink transition hover:text-velmora-antique'
    : 'p-2 text-velmora-cream transition hover:text-velmora-champagne'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition duration-500 ${
        solid
          ? 'border-velmora-line bg-velmora-porcelain/92 text-velmora-ink shadow-[0_10px_30px_rgba(36,25,20,0.07)] backdrop-blur-xl'
          : 'border-white/15 bg-transparent text-velmora-cream'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`inline-flex items-center justify-center lg:hidden ${iconButtonClass}`}
          aria-label="Open menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.24em] sm:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs font-bold uppercase tracking-[0.22em] transition hover:text-velmora-champagne"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button type="button" className={iconButtonClass} aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className={`relative ${iconButtonClass}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-velmora-line bg-velmora-porcelain text-velmora-ink transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'max-h-80' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="grid gap-1 p-5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-velmora-line py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
