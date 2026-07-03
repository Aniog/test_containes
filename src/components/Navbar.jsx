import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(228,216,198,0.8)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] transition-colors',
              solid ? 'text-ink' : 'text-cream'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-wide2 transition-colors hover:text-gold-deep',
                solid ? 'text-ink-soft' : 'text-cream/90'
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold-deep', solid ? 'text-ink' : 'text-cream')}
          >
            <Search size={19} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn('relative transition-colors hover:text-gold-deep', solid ? 'text-ink' : 'text-cream')}
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-sand bg-cream transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0 border-t-0'
        )}
      >
        <div className="flex flex-col px-5 py-2">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="border-b border-sand/60 py-3 text-xs uppercase tracking-wide2 text-ink-soft last:border-0"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
