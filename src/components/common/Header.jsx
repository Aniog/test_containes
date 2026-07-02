import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#story' },
  { label: 'Journal', href: '#journal' },
]

const Header = ({ cartCount, onCartOpen }) => {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerClass = solid || menuOpen
    ? 'border-velmora-line/80 bg-velmora-ivory/95 text-velmora-ink shadow-soft backdrop-blur-xl'
    : 'border-transparent bg-transparent text-velmora-cream'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${headerClass}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#home" className="font-serif text-3xl font-semibold tracking-[0.22em]">
          VELMORA
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-3 transition hover:bg-velmora-gold/15 sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-3 transition hover:bg-velmora-gold/15" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="rounded-full p-3 transition hover:bg-velmora-gold/15 lg:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-velmora-line/80 bg-velmora-ivory px-5 py-6 text-velmora-ink lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-velmora-line/60 pb-4 text-sm font-bold uppercase tracking-[0.24em]">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
