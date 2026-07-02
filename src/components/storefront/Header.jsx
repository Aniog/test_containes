import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const transparent = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const textTone = transparent ? 'text-velmora-cream' : 'text-velmora-ink'
  const navSurface = transparent
    ? 'border-transparent bg-transparent'
    : 'border-velmora-mist bg-velmora-parchment/95 shadow-sm backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${navSurface}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className={`font-serif text-3xl tracking-brand transition-colors ${textTone}`}>
          VELMORA
        </Link>

        <nav className={`hidden items-center gap-9 font-sans text-xs font-semibold uppercase tracking-jewel md:flex ${textTone}`}>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="transition-colors hover:text-velmora-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-3 ${textTone}`}>
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 transition-colors hover:bg-velmora-gold/15 hover:text-velmora-gold"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="relative rounded-full p-2 transition-colors hover:bg-velmora-gold/15 hover:text-velmora-gold"
            onClick={onCartOpen}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 font-sans text-nano font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-full p-2 transition-colors hover:bg-velmora-gold/15 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso text-velmora-cream md:hidden">
          <div className="flex h-18 items-center justify-between border-b border-velmora-gold/25 px-5">
            <Link to="/" className="font-serif text-3xl tracking-brand text-velmora-cream">
              VELMORA
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-full border border-velmora-gold/35 p-2 text-velmora-cream"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="grid gap-2 px-5 py-10 font-serif text-4xl text-velmora-cream">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="border-b border-velmora-gold/20 py-5">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
