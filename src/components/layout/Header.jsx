import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

function Header({ cartCount, onOpenCart, onNavigate }) {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (view) => {
    setMobileOpen(false)
    onNavigate(view)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
        solid || mobileOpen
          ? 'border-velmora-taupe/30 bg-velmora-ivory/95 text-velmora-espresso shadow-[0_10px_30px_rgba(33,24,20,0.06)] backdrop-blur-xl'
          : 'border-velmora-pearl/15 bg-transparent text-velmora-pearl'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <button
          type="button"
          onClick={() => go('home')}
          className="font-serif text-2xl tracking-[0.18em] md:text-3xl"
          aria-label="Velmora homepage"
        >
          VELMORA
        </button>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className="text-xs font-semibold uppercase tracking-[0.24em] opacity-90 transition hover:text-velmora-gold"
              onClick={() => go(link.label === 'Shop' ? 'shop' : 'home')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" className="hidden transition hover:text-velmora-gold sm:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative transition hover:text-velmora-gold"
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-pearl">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-velmora-taupe/30 bg-velmora-ivory px-5 py-5 text-velmora-espresso md:hidden">
          <nav className="grid gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                className="border-b border-velmora-taupe/25 pb-4 text-left text-sm font-semibold uppercase tracking-[0.24em]"
                onClick={() => go(link.label === 'Shop' ? 'shop' : 'home')}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
