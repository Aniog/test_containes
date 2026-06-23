import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?focus=collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen, isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const transparent = !isScrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${transparent ? 'bg-transparent text-velmora-pearl' : 'border-b border-velmora-oyster bg-velmora-parchment/95 text-velmora-ink shadow-soft backdrop-blur'}`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serifDisplay text-3xl font-semibold tracking-[0.14em]">
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full p-2 transition hover:bg-velmora-gold/15"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:bg-velmora-gold/15"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2 transition hover:bg-velmora-gold/15 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} border-t border-velmora-oyster bg-velmora-parchment px-4 py-5 text-velmora-ink shadow-soft`}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
