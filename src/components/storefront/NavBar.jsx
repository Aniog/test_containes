import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Gift%20Sets' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const NavBar = ({ isScrolled, mobileOpen, setMobileOpen, cartCount, onOpenCart }) => {
  const navText = isScrolled || mobileOpen ? 'text-velmora-ink' : 'text-velmora-porcelain'
  const navBg = isScrolled || mobileOpen
    ? 'border-velmora-linen bg-velmora-porcelain/95 shadow-soft backdrop-blur-xl'
    : 'border-velmora-porcelain/20 bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${navBg}`}>
      <nav className="velmora-container flex h-20 items-center justify-between">
        <Link
          to="/"
          className={`font-serifDisplay text-3xl font-semibold tracking-[0.22em] ${navText}`}
          onClick={() => setMobileOpen(false)}
        >
          VELMORA
        </Link>

        <div className={`hidden items-center gap-10 md:flex ${navText}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs font-bold uppercase tracking-luxury transition hover:text-velmora-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className={`flex items-center gap-2 ${navText}`}>
          <button
            type="button"
            className="hidden rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold md:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-velmora-linen bg-velmora-porcelain text-velmora-ink transition-all duration-500 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="velmora-container grid gap-1 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="border-b border-velmora-linen py-4 text-sm font-bold uppercase tracking-luxury text-velmora-ink"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar
