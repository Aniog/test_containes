import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', target: 'shop' },
  { label: 'Collections', target: 'collections' },
  { label: 'About', target: 'about' },
  { label: 'Journal', target: 'journal' },
]

export default function Header({ isScrolled, page, onNavigate, cartCount, onCartOpen, mobileOpen, setMobileOpen }) {
  const isTransparent = page === 'home' && !isScrolled

  const linkClass = isTransparent
    ? 'text-velmora-pearl hover:text-velmora-champagne'
    : 'text-velmora-ink hover:text-velmora-brass'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        isTransparent
          ? 'border-transparent bg-transparent py-5'
          : 'border-b border-velmora-champagne/20 bg-velmora-cream/95 py-3 shadow-sm backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <button
          type="button"
          className={`font-serif text-2xl font-semibold tracking-[0.18em] transition ${linkClass}`}
          onClick={() => onNavigate('home')}
        >
          VELMORA
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`text-xs font-bold uppercase tracking-[0.22em] transition ${linkClass}`}
              onClick={() => onNavigate(link.target)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`hidden rounded-full p-2 transition hover:bg-velmora-champagne/15 sm:block ${linkClass}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className={`relative rounded-full p-2 transition hover:bg-velmora-champagne/15 ${linkClass}`}
            onClick={onCartOpen}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className={`rounded-full p-2 transition hover:bg-velmora-champagne/15 md:hidden ${linkClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-4 mt-3 overflow-hidden border border-velmora-champagne/25 bg-velmora-pearl text-velmora-ink shadow-soft transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-1 p-3">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              className="px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-linen"
              onClick={() => {
                onNavigate(link.target)
                setMobileOpen(false)
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
