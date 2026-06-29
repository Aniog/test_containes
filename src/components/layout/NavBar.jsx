import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/hooks/useCart'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

const NavBar = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const chromeClass =
    scrolled || !isHome
      ? 'border-b border-white/10 bg-[var(--color-ink)]/94 text-[var(--color-text-on-dark)] shadow-[0_14px_40px_rgba(15,10,8,0.24)] backdrop-blur-xl'
      : 'bg-transparent text-[var(--color-text-on-dark)]'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${chromeClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-12">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif-display text-3xl tracking-[0.45em] text-current md:flex-1">
          VELMORA
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex md:flex-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.36em] transition ${isActive ? 'text-[var(--color-accent)]' : 'text-current/80 hover:text-current'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:flex-1">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-current transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center border border-white/15 text-current transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[10px] font-medium text-[var(--color-ink)]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[var(--color-ink)]/97 px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className="text-sm uppercase tracking-[0.32em] text-[var(--color-text-on-dark)]/85 transition hover:text-[var(--color-accent)]"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
