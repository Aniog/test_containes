import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Gift%20Sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ solid, cartCount, onCartOpen, mobileOpen, setMobileOpen }) {
  const navTone = solid
    ? 'border-velmora-mist/80 bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'
    : 'border-transparent bg-transparent text-velmora-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${navTone}`}>
      <div className="luxury-container flex h-20 items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
          className="premium-focus -ml-3 inline-flex h-11 w-11 items-center justify-center md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="premium-focus font-serif text-2xl font-semibold tracking-luxury text-current sm:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="premium-focus text-xs font-semibold uppercase tracking-luxury text-current/88 transition hover:text-velmora-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/shop"
            aria-label="Search products"
            className="premium-focus inline-flex h-11 w-11 items-center justify-center transition hover:text-velmora-champagne"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label={`Open cart with ${cartCount} items`}
            onClick={onCartOpen}
            className="premium-focus relative inline-flex h-11 w-11 items-center justify-center transition hover:text-velmora-champagne"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-ink/70 text-velmora-ivory backdrop-blur-sm md:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto flex h-full w-[86%] max-w-sm animate-drawerIn flex-col bg-velmora-espresso p-6 shadow-luxury">
            <div className="flex items-center justify-between border-b border-velmora-mist/20 pb-5">
              <Link to="/" onClick={() => setMobileOpen(false)} className="font-serif text-3xl tracking-luxury text-velmora-ivory">
                VELMORA
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="premium-focus inline-flex h-10 w-10 items-center justify-center text-velmora-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 grid gap-7" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="premium-focus border-b border-velmora-mist/20 pb-5 font-serif text-3xl text-velmora-ivory transition hover:text-velmora-champagne"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <p className="mt-auto border-t border-velmora-mist/20 pt-6 text-sm leading-6 text-velmora-ivory/70">
              Demi-fine gold jewelry designed for everyday rituals and meaningful gifts.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
