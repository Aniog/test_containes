import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const surfaceClass = transparent
    ? 'border-white/15 bg-transparent text-[var(--color-ivory)]'
    : 'border-[color:var(--color-hairline)] bg-[color:rgba(251,246,238,0.95)] text-[var(--color-espresso)] shadow-[0_12px_30px_rgba(33,24,18,0.08)] backdrop-blur-xl'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${surfaceClass}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="font-[var(--font-heading)] text-2xl tracking-[0.18em] lg:text-3xl" aria-label="Velmora homepage">
          VELMORA
        </Link>
        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:text-[var(--color-gold)]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" className="hidden rounded-full border border-current/20 bg-transparent p-2.5 text-current transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:inline-flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button type="button" onClick={onOpenCart} className="relative inline-flex rounded-full border border-current/20 bg-transparent p-2.5 text-current transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]" aria-label={`Open cart with ${cartCount} items`}>
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-gold)] px-1 text-[10px] font-bold text-[var(--color-espresso)]">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="inline-flex rounded-full border border-current/20 bg-transparent p-2.5 text-current transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-[color:var(--color-hairline)] bg-[var(--color-ivory)] px-4 py-5 text-[var(--color-espresso)] shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="border-b border-[color:var(--color-hairline)] pb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-espresso)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
