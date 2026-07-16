import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=necklaces' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = ({ isScrolled, cartCount, isMenuOpen, setIsMenuOpen, onCartOpen }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled
  const linkClass = transparent ? 'text-velmora-ivory hover:text-velmora-champagne' : 'text-velmora-espresso hover:text-velmora-bronze'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        transparent
          ? 'border-white/15 bg-transparent text-velmora-ivory'
          : 'border-velmora-stone bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className={`font-serif text-3xl font-semibold tracking-nav ${linkClass}`}>
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`text-xs font-bold uppercase tracking-nav transition ${linkClass}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`hidden h-11 w-11 items-center justify-center rounded-full border transition sm:flex ${
              transparent ? 'border-white/25 hover:bg-white/10' : 'border-velmora-stone hover:bg-velmora-porcelain'
            }`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition ${
              transparent ? 'border-white/25 hover:bg-white/10' : 'border-velmora-stone hover:bg-velmora-porcelain'
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
              transparent ? 'border-white/25 hover:bg-white/10' : 'border-velmora-stone hover:bg-velmora-porcelain'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-velmora-stone bg-velmora-ivory px-4 py-5 text-velmora-espresso lg:hidden">
          <nav className="grid gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border border-velmora-stone px-5 py-3 text-sm font-bold uppercase tracking-nav transition hover:bg-velmora-porcelain"
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
