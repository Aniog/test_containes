import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop?collection=gift' },
  { label: 'About', path: '/#story' },
  { label: 'Journal', path: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${solid ? 'bg-velmora-cream/95 text-velmora-ink shadow-sm backdrop-blur-xl' : 'bg-transparent text-velmora-cream'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
          VELMORA
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.path} className="text-xs font-bold uppercase tracking-[0.22em] transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 transition hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne" type="button" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative rounded-full p-2 transition hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne" type="button" aria-label="Open cart" onClick={onCartOpen}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">{cartCount}</span>}
          </button>
          <button className="rounded-full p-2 transition hover:bg-velmora-champagne/20 focus:outline-none focus:ring-2 focus:ring-velmora-champagne md:hidden" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-velmora-ink/10 bg-velmora-cream px-5 pb-6 text-velmora-ink md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.path} className="border-b border-velmora-ink/10 py-4 text-sm font-bold uppercase tracking-[0.2em]" onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
