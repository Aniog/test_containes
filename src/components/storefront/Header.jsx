import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', target: 'shop' },
  { label: 'Collections', target: 'collections' },
  { label: 'About', target: 'about' },
  { label: 'Journal', target: 'journal' },
]

export default function Header({ page, onNavigate, cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isSolid = scrolled || page !== 'home' || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (target) => {
    onNavigate(target)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${
        isSolid
          ? 'border-velmora-line bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
          : 'border-white/10 bg-transparent text-velmora-ivory'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <button
          type="button"
          className="rounded-full p-2 text-current lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <button
          type="button"
          onClick={() => go('home')}
          className="font-serif text-3xl font-semibold tracking-[0.22em] text-current sm:text-4xl"
          aria-label="Velmora home"
        >
          VELMORA
        </button>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => go(link.target)}
              className="text-xs font-bold uppercase tracking-[0.22em] text-current/85 transition hover:text-velmora-gold"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go('shop')}
            className="rounded-full p-2 text-current transition hover:text-velmora-gold"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 text-current transition hover:text-velmora-gold"
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

      {menuOpen && (
        <div className="border-t border-velmora-line bg-velmora-ivory px-5 py-5 text-velmora-espresso lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => go(link.target)}
                className="border-b border-velmora-line py-4 text-left text-xs font-bold uppercase tracking-luxury text-velmora-espresso"
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
