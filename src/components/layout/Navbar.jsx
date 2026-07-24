import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setCartOpen, setSearchOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'border-b border-line bg-ivory/95 shadow-[0_10px_30px_-20px_rgba(43,33,24,0.3)] backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <div className="flex flex-1 items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              '-ml-1 p-1 transition-colors',
              transparent ? 'text-ivory' : 'text-espresso',
            )}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className={cn(
            'font-display text-xl font-medium tracking-[0.28em] transition-colors duration-500 md:text-2xl',
            transparent ? 'text-ivory' : 'text-espresso',
          )}
        >
          VELMORA
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'group relative text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-300',
                  transparent
                    ? 'text-ivory/85 hover:text-ivory'
                    : 'text-cocoa hover:text-espresso',
                  isActive && (transparent ? 'text-ivory' : 'text-gold-deep'),
                )
              }
            >
              {link.label}
              <span
                className={cn(
                  'absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 group-hover:w-full',
                  transparent ? 'bg-ivory' : 'bg-gold',
                )}
              />
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-1 md:gap-3">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className={cn(
              'p-2 transition-colors duration-300',
              transparent ? 'text-ivory hover:text-gold-soft' : 'text-espresso hover:text-gold-deep',
            )}
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className={cn(
              'relative p-2 transition-colors duration-300',
              transparent ? 'text-ivory hover:text-gold-soft' : 'text-espresso hover:text-gold-deep',
            )}
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-b border-line bg-ivory transition-all duration-500 md:hidden',
          mobileOpen ? 'max-h-72' : 'max-h-0 border-b-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'py-2.5 text-xs font-medium uppercase tracking-[0.24em] text-cocoa transition-colors',
                  isActive && 'text-gold-deep',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
