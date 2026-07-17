import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Shop', page: 'shop' },
  { label: 'Collections', page: 'home', anchor: 'collections' },
  { label: 'About', page: 'home', anchor: 'story' },
  { label: 'Journal', page: 'home', anchor: 'journal' },
]

export default function Navbar({ solid, currentPage, onNavigate, cartCount, onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isTransparent = !solid && currentPage === 'home'

  const go = (link) => {
    onNavigate(link.page, link.anchor)
    setMobileOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${isTransparent ? 'velmora-nav-transparent bg-transparent text-velmora-ivory' : 'border-b border-velmora-sand bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur-xl'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="bg-transparent p-0 font-serif text-3xl font-semibold tracking-[0.18em] text-current transition hover:text-velmora-champagne"
          aria-label="Velmora home"
        >
          VELMORA
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <button
              key={`${link.label}-${link.anchor || link.page}`}
              type="button"
              onClick={() => go(link)}
              className="bg-transparent p-0 text-xs font-bold uppercase tracking-[0.24em] text-current transition hover:text-velmora-champagne"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full bg-transparent p-2 text-current transition hover:text-velmora-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full bg-transparent p-2 text-current transition hover:text-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full bg-transparent p-2 text-current transition hover:text-velmora-champagne md:hidden"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`border-t border-velmora-sand bg-velmora-ivory px-5 py-5 text-velmora-ink transition md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={`mobile-${link.label}`}
              type="button"
              onClick={() => go(link)}
              className="bg-transparent p-0 text-left text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
