import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const LINKS = [
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
        'fixed inset-x-0 top-0 z-[90] transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(231,221,204,0.8)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:gap-0">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X size={20} className={solid ? 'text-ink' : 'text-ivory'} strokeWidth={1.5} />
            ) : (
              <Menu size={20} className={solid ? 'text-ink' : 'text-ivory'} strokeWidth={1.5} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] transition-colors md:text-3xl',
              solid ? 'text-ink' : 'text-ivory'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={cn(
                  'text-[11px] uppercase tracking-widest2 transition-colors hover:text-gold',
                  solid ? 'text-ink' : 'text-ivory/90'
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-sand bg-ivory transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <ul className="flex flex-col px-5 py-2">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="block py-3 text-xs uppercase tracking-widest2 text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
