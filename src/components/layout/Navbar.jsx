import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent over hero only on the homepage; solid elsewhere.
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe',
        solid ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(217,207,192,0.8)]' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 h-16 md:h-20">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:gap-0 md:flex-1">
          <button
            type="button"
            className="md:hidden -ml-1 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X size={22} className={solid ? 'text-ink' : 'text-cream'} strokeWidth={1.5} />
            ) : (
              <Menu size={22} className={solid ? 'text-ink' : 'text-cream'} strokeWidth={1.5} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.3em] md:tracking-[0.35em] transition-colors',
              solid ? 'text-ink' : 'text-cream',
              'md:ml-0',
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links (desktop) */}
        <div className="hidden md:flex items-center gap-10 md:flex-1 md:justify-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={cn(
                'text-xs uppercase tracking-widest2 font-medium transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-cream',
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5 md:flex-1 md:justify-end">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-400 ease-luxe bg-cream',
          mobileOpen ? 'max-h-96 border-t border-hairline' : 'max-h-0',
        )}
      >
        <div className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="py-3 text-sm uppercase tracking-widest2 text-ink border-b border-hairline last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
