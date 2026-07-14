import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=edit' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const textClass = solid ? 'text-velmora-ink' : 'text-velmora-cream'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? 'border-b border-velmora-mist bg-velmora-cream/95 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-start lg:hidden">
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className={`rounded-full border p-2 transition ${solid ? 'border-velmora-mist text-velmora-ink hover:bg-velmora-parchment' : 'border-velmora-cream/50 text-velmora-cream hover:bg-velmora-cream/10'}`} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className={`justify-self-start font-serif text-2xl tracking-[0.22em] transition ${textClass}`}>VELMORA</Link>

        <div className="hidden items-center gap-10 justify-self-center lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={`text-xs font-semibold uppercase tracking-[0.22em] transition hover:text-velmora-champagne ${textClass}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={`flex items-center justify-end gap-3 justify-self-end ${textClass}`}>
          <button type="button" className="hidden rounded-full p-2 transition hover:bg-velmora-champagne/15 sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-mist bg-velmora-cream transition-all duration-500 lg:hidden ${mobileOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <div className="grid gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="py-3 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-bronze">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
