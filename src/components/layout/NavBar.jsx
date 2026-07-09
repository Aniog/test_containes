import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function NavBar({ cartCount, onCartOpen, isScrolled, menuOpen, onMenuToggle }) {
  const navClass = isScrolled
    ? 'border-amber-200 bg-stone-50/95 text-stone-950 shadow-sm backdrop-blur-xl'
    : 'border-transparent bg-transparent text-stone-50'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${navClass}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          onClick={onMenuToggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/25 bg-transparent text-current md:hidden"
          aria-label="Open navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em] text-current md:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-current/90 transition hover:text-amber-700"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent text-current transition hover:border-amber-700 hover:text-amber-700 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-transparent text-current transition hover:border-amber-700 hover:text-amber-700"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-[0.65rem] font-bold text-stone-50">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-amber-200 bg-stone-50 px-5 py-6 text-stone-950 shadow-2xl md:hidden">
          <nav className="grid gap-5">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={onMenuToggle}
                className="font-serif text-2xl text-stone-950"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
