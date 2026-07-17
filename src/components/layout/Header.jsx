import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const navClass = transparent
    ? 'border-white/15 bg-transparent text-white'
    : 'border-velmora-gold/20 bg-velmora-ivory/95 text-velmora-ink shadow-[0_12px_40px_rgba(47,36,27,0.08)] backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${navClass}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <button
          type="button"
          className="rounded-full p-2 text-current transition hover:text-velmora-gold lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.22em] text-current lg:text-3xl" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-xs font-bold uppercase tracking-[0.22em] lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-current/85 transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link to="/shop" className="rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-extrabold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <nav className="border-t border-velmora-gold/20 bg-velmora-ivory px-4 py-5 text-velmora-ink shadow-soft">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="rounded-full px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-velmora-parchment hover:text-velmora-gold">
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
