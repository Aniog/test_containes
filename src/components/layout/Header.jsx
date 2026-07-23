import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=signature' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solid = scrolled || mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${
        solid
          ? 'border-b border-velmora-ink/10 bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'
          : 'bg-transparent text-velmora-ivory'
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-3xl font-semibold tracking-[0.18em]"
          aria-label="Velmora Fine Jewelry home"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs font-bold uppercase tracking-velmora transition hover:text-velmora-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            to="/shop"
            className="hidden rounded-full p-2 transition hover:bg-velmora-gold/15 sm:inline-flex"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:bg-velmora-gold/15"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2 transition hover:bg-velmora-gold/15 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-velmora-ink/10 bg-velmora-ivory px-4 pb-5 text-velmora-ink lg:hidden">
          <nav className="grid gap-1 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="border-b border-velmora-ink/10 py-4 text-sm font-bold uppercase tracking-velmora"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
