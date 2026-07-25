import { Menu, Search, ShoppingBag, X } from 'lucide-react'

export default function Nav({ currentPage, onNavigate, onCartOpen, cartCount, isScrolled, isMenuOpen, setIsMenuOpen }) {
  const navIsSolid = isScrolled || currentPage !== 'home' || isMenuOpen
  const links = [
    { label: 'Shop', page: 'shop' },
    { label: 'Collections', page: 'home', anchor: 'categories' },
    { label: 'About', page: 'home', anchor: 'story' },
    { label: 'Journal', page: 'home', anchor: 'journal' },
  ]

  const handleLink = (link) => {
    setIsMenuOpen(false)
    onNavigate(link.page, link.anchor)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${
        navIsSolid
          ? 'border-velmora-sand bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'
          : 'border-velmora-ivory/20 bg-transparent text-velmora-ivory'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="font-serif text-2xl font-semibold tracking-[0.24em] text-current sm:text-3xl"
          onClick={() => handleLink({ page: 'home' })}
          aria-label="Go to Velmora homepage"
        >
          VELMORA
        </button>

        <div className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.22em] lg:flex">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleLink(link)}
              className="text-current transition hover:text-velmora-champagne"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full p-2 text-current transition hover:text-velmora-champagne sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 text-current transition hover:text-velmora-champagne"
            onClick={onCartOpen}
            aria-label={`Open cart with ${cartCount} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-full p-2 text-current transition hover:text-velmora-champagne lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-velmora-sand bg-velmora-ivory text-velmora-ink transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-1 px-4 py-4">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleLink(link)}
              className="border-b border-velmora-sand py-4 text-left text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
