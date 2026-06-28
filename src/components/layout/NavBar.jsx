import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

export default function NavBar({ scrolled }) {
  const location = useLocation()
  const { itemCount, setIsCartOpen } = useCart()
  const isHome = location.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.hash, location.pathname, location.search])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'border-b border-stone-200/70 bg-stone-50/95 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          to="/"
          className={cn(
            'font-[Cormorant_Garamond] text-3xl tracking-[0.35em] transition-colors',
            scrolled || !isHome ? 'text-stone-950' : 'text-stone-50',
          )}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.3em] transition-colors',
                  scrolled || !isHome ? 'text-stone-700 hover:text-stone-950' : 'text-stone-200 hover:text-stone-50',
                  isActive && 'text-amber-200',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden',
              scrolled || !isHome
                ? 'border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                : 'border-stone-100/30 text-stone-100 hover:border-stone-50 hover:text-stone-50',
            )}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label="Search"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border transition',
              scrolled || !isHome
                ? 'border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                : 'border-stone-100/30 text-stone-100 hover:border-stone-50 hover:text-stone-50',
            )}
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setIsCartOpen(true)}
            className={cn(
              'relative flex h-10 w-10 items-center justify-center rounded-full border transition',
              scrolled || !isHome
                ? 'border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                : 'border-stone-100/30 text-stone-100 hover:border-stone-50 hover:text-stone-50',
            )}
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'border-t transition-all duration-300 md:hidden',
          scrolled || !isHome ? 'border-stone-200/70 bg-stone-50/95' : 'border-stone-100/15 bg-stone-950/70 backdrop-blur-xl',
          isMenuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.3em] transition-colors',
                  scrolled || !isHome
                    ? 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                    : 'text-stone-100 hover:bg-stone-50/10 hover:text-stone-50',
                  isActive && (scrolled || !isHome ? 'bg-stone-100 text-stone-950' : 'bg-stone-50/10 text-stone-50'),
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
