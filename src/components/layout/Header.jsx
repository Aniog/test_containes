import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=signature' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const textColor = transparent ? 'text-velmora-ivory' : 'text-velmora-espresso'
  const navSurface = transparent ? 'bg-transparent' : 'border-b border-velmora-sand/70 bg-velmora-ivory/95 shadow-[0_14px_40px_rgba(33,25,21,0.08)] backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navSurface}`}>
      <div className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 ${textColor}`}>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-full p-2 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] transition-opacity hover:opacity-80">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.24em] transition-colors hover:text-velmora-champagne ${isActive ? 'text-velmora-champagne' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 transition-colors hover:bg-white/10" aria-label="Search">
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={onOpenCart} className="relative rounded-full p-2 transition-colors hover:bg-white/10" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-velmora-sand/70 bg-velmora-ivory text-velmora-espresso transition-all duration-300 md:hidden ${menuOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-5 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="border-b border-velmora-sand/70 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
