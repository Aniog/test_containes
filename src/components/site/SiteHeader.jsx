import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = ({ cartCount, onCartOpen }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash, location.search])

  const headerClass =
    isHome && !scrolled
      ? 'border-transparent bg-transparent text-[var(--color-surface)]'
      : 'border-[color:var(--color-border)] bg-[rgba(248,243,236,0.9)] text-[var(--color-foreground)] backdrop-blur-xl shadow-[0_10px_30px_rgba(18,12,10,0.08)]'

  const iconButtonClass =
    isHome && !scrolled
      ? 'border-white/15 bg-white/5 text-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
      : 'border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${headerClass}`}>
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 lg:w-[14rem]">
          <button
            type="button"
            className={`inline-flex rounded-full border p-3 transition lg:hidden ${iconButtonClass}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link to="/" className="font-display text-[1.95rem] tracking-[0.4em]">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.28em] transition ${
                  isActive ? 'text-[var(--color-accent)]' : 'hover:text-[var(--color-accent)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 lg:w-[14rem]">
          <button
            type="button"
            aria-label="Search"
            onClick={() => navigate('/shop')}
            className={`inline-flex rounded-full border p-3 transition ${iconButtonClass}`}
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className={`relative inline-flex rounded-full border p-3 transition ${iconButtonClass}`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[10px] font-semibold text-[var(--color-accent-foreground)]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`border-t border-[color:var(--color-border-soft)] bg-[rgba(248,243,236,0.96)] px-5 py-4 text-[var(--color-foreground)] transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 overflow-hidden border-transparent py-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[88rem] flex-col gap-4 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-sm uppercase tracking-[0.24em] text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
