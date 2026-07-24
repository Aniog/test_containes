import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const Header = ({ scrolled, cartCount, mobileOpen, onToggleMobile, onOpenCart }) => {
  const shellClass = scrolled
    ? 'border-b border-[rgba(215,195,171,0.8)] bg-[rgba(247,242,234,0.95)] shadow-[0_10px_35px_rgba(36,26,19,0.08)] backdrop-blur-xl'
    : 'border-b border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 lg:w-48">
          <button
            type="button"
            onClick={onToggleMobile}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden ${
              scrolled
                ? 'border-[#d7c3ab] text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                : 'border-white/20 text-[#f7f2ea] hover:border-[#c19a6b] hover:text-[#c19a6b]'
            }`}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link
            to="/"
            className={`font-['Cormorant_Garamond'] text-3xl tracking-[0.3em] transition ${scrolled ? 'text-[#241a13]' : 'text-[#f7f2ea]'}`}
          >
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.32em] transition ${
                  scrolled
                    ? isActive
                      ? 'text-[#c19a6b]'
                      : 'text-[#241a13] hover:text-[#c19a6b]'
                    : isActive
                      ? 'text-[#c19a6b]'
                      : 'text-[#f7f2ea] hover:text-[#c19a6b]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:w-48">
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
              scrolled
                ? 'border-[#d7c3ab] text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                : 'border-white/20 text-[#f7f2ea] hover:border-[#c19a6b] hover:text-[#c19a6b]'
            }`}
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
              scrolled
                ? 'border-[#d7c3ab] text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                : 'border-white/20 text-[#f7f2ea] hover:border-[#c19a6b] hover:text-[#c19a6b]'
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[#c19a6b] px-1 text-[10px] font-semibold text-[#f7f2ea]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[rgba(215,195,171,0.7)] bg-[#f7f2ea] transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-5 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={onToggleMobile}
              className="border-b border-[rgba(215,195,171,0.5)] py-4 text-xs uppercase tracking-[0.32em] text-[#241a13] transition hover:text-[#c19a6b]"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
