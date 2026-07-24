import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent over hero only on homepage top; solid elsewhere.
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur border-b border-line',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:flex-1">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className={cn('h-5 w-5', transparent ? 'text-cream' : 'text-ink')} />
            ) : (
              <Menu className={cn('h-5 w-5', transparent ? 'text-cream' : 'text-ink')} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] md:text-3xl',
              transparent ? 'text-cream' : 'text-ink',
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-widest2 transition-colors',
                transparent
                  ? 'text-cream/90 hover:text-gold'
                  : 'text-charcoal hover:text-gold',
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn(transparent ? 'text-cream' : 'text-ink', 'transition-colors hover:text-gold')}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn(
              'relative transition-colors hover:text-gold',
              transparent ? 'text-cream' : 'text-ink',
            )}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-cream md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="py-3 text-sm uppercase tracking-widest2 text-charcoal hover:text-gold"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
