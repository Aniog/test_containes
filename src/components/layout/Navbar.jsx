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
    const onScroll = () => setScrolled(window.scrollY > 40)
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
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(217,207,192,0.8)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo on mobile */}
        <div className="flex flex-1 items-center gap-4 md:gap-0">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X width={22} height={22} strokeWidth={1.5} className={solid ? 'text-ink' : 'text-cream'} />
            ) : (
              <Menu width={22} height={22} strokeWidth={1.5} className={solid ? 'text-ink' : 'text-cream'} />
            )}
          </button>

          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-widest3 md:text-3xl',
              solid ? 'text-ink' : 'text-cream'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-widest2 transition-colors hover:text-gold',
                solid ? 'text-ink' : 'text-cream'
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex flex-1 items-center justify-end gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <Search width={20} height={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-cream')}
          >
            <ShoppingBag width={20} height={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-cream md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className="border-b border-line/60 py-3.5 text-xs uppercase tracking-widest2 text-ink last:border-0"
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
