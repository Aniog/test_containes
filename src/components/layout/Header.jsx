import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', href: '#/shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#story' },
  { label: 'Journal', href: '#journal' },
]

export default function Header({ cartCount, onCartOpen, transparent = true }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !transparent || scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${
        solid
          ? 'border-b border-velmora-ink/10 bg-velmora-porcelain/95 text-velmora-ink shadow-soft backdrop-blur-xl'
          : 'text-velmora-pearl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#/" className="font-serif text-3xl font-bold tracking-[0.18em]">
          VELMORA
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-luxe transition hover:text-velmora-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-3 transition hover:bg-velmora-gold/20"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className="relative rounded-full p-3 transition hover:bg-velmora-gold/20"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[11px] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-3 transition hover:bg-velmora-gold/20 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-velmora-ink/10 bg-velmora-porcelain px-5 py-6 text-velmora-ink md:hidden">
          <nav className="grid gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
