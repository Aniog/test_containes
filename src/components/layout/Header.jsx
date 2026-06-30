import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', href: 'shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

export default function Header({ isScrolled, cartCount, onCartOpen, onNavigate, mobileOpen, setMobileOpen }) {
  const solid = isScrolled || mobileOpen

  const handleLink = (href) => {
    setMobileOpen(false)
    onNavigate(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        solid
          ? 'border-velmora-taupe/30 bg-velmora-pearl/95 text-velmora-espresso shadow-soft backdrop-blur-xl'
          : 'border-velmora-pearl/20 bg-transparent text-velmora-pearl'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10" aria-label="Primary navigation">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/25 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <button
          type="button"
          onClick={() => handleLink('#home')}
          className="font-serif text-2xl font-semibold tracking-[0.28em] md:text-3xl"
          aria-label="Velmora homepage"
        >
          VELMORA
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleLink(link.href)}
              className="text-xs font-bold uppercase tracking-luxury transition hover:text-velmora-gold"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/25 transition hover:border-velmora-gold hover:text-velmora-gold sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/25 transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-velmora-taupe/30 bg-velmora-pearl px-5 py-5 text-velmora-espresso md:hidden">
          <div className="grid gap-4">
            {links.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLink(link.href)}
                className="border-b border-velmora-taupe/25 pb-3 text-left text-sm font-bold uppercase tracking-luxury"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
