import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = !isHome || scrolled || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'border-b border-velmora-espresso/10 bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl' : 'border-b border-white/15 bg-velmora-espresso/35 text-velmora-ivory backdrop-blur-[2px]'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="rounded-full p-2 text-current transition hover:text-velmora-gold lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-current sm:text-4xl">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-gold ${isActive ? 'text-velmora-gold' : 'text-current'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" className="rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Open cart" onClick={onCartOpen}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ivory">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso transition-all duration-300 lg:hidden ${menuOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-5 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] transition hover:bg-velmora-champagne">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
