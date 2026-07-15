import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', target: 'collection-page' },
  { label: 'Collections', target: 'collections' },
  { label: 'About', target: 'about' },
  { label: 'Journal', target: 'journal' },
]

export default function Header({ isScrolled, mobileOpen, onMobileToggle, onCartOpen, onNavigate, cartCount }) {
  const solid = isScrolled || mobileOpen

  const navClasses = solid
    ? 'border-velmora-taupe/20 bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
    : 'border-white/15 bg-transparent text-velmora-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${navClasses}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="bg-transparent p-0 font-serif text-2xl font-semibold tracking-[0.18em] text-current transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne md:text-3xl"
        >
          VELMORA
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => onNavigate(link.target)}
              className="bg-transparent p-0 text-xs font-bold uppercase tracking-[0.24em] text-current/85 transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full bg-transparent p-3 text-current transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-velmora-champagne md:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full bg-transparent p-3 text-current transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
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
            onClick={onMobileToggle}
            className="rounded-full bg-transparent p-3 text-current transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-velmora-champagne md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-taupe/20 bg-velmora-ivory text-velmora-espresso transition-all duration-300 md:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <div className="space-y-1 px-5 py-5">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => onNavigate(link.target)}
              className="block w-full bg-transparent py-3 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
