import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop', label: 'Collections' },
  { to: '/#about', label: 'About' },
  { to: '/#journal', label: 'Journal' },
]

const Navbar = ({ solid, cartCount, onOpenCart }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navClass = solid
    ? 'border-b border-white/10 bg-obsidian/95 backdrop-blur-xl'
    : 'bg-transparent'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${navClass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 text-ivory sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory transition hover:border-champagne hover:text-champagne lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="font-serif text-2xl tracking-[0.42em] text-ivory sm:text-3xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-xs uppercase tracking-[0.28em] text-ivory/82 transition hover:text-champagne"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory transition hover:border-champagne hover:text-champagne"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onOpenCart}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory transition hover:border-champagne hover:text-champagne"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-obsidian">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-obsidian/70 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-parchment px-6 py-6 text-obsidian shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <p className="font-serif text-2xl tracking-[0.28em] text-obsidian">VELMORA</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand text-obsidian"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.28em] text-obsidian"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                onOpenCart()
              }}
              className="mt-auto rounded-full bg-obsidian px-5 py-4 text-xs uppercase tracking-[0.24em] text-ivory"
            >
              View Cart {cartCount > 0 ? `(${cartCount})` : ''}
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Navbar
