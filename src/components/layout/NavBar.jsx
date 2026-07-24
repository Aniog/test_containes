import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Huggies' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen, isScrolled, isMenuOpen, setIsMenuOpen }) {
  const solid = isScrolled || isMenuOpen

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'bg-velmora-ivory/95 text-velmora-espresso shadow-[0_8px_30px_rgba(35,23,19,0.08)] backdrop-blur-xl' : 'bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10" aria-label="Primary navigation">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full p-2 transition hover:bg-velmora-champagne/15 focus:outline-none focus:ring-2 focus:ring-velmora-champagne lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] sm:text-4xl" onClick={() => setIsMenuOpen(false)}>
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className="text-xs font-semibold uppercase tracking-cta transition hover:text-velmora-champagne"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/shop"
            className="hidden rounded-full p-2 transition hover:bg-velmora-champagne/15 focus:outline-none focus:ring-2 focus:ring-velmora-champagne sm:inline-flex"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-linen/70 bg-velmora-ivory text-velmora-espresso transition-all duration-500 lg:hidden ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid gap-1 px-5 py-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-velmora-linen py-4 text-sm font-semibold uppercase tracking-cta text-velmora-espresso"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
