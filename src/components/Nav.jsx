import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Nav() {
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
  }, [location])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(226,216,199,0.8)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:gap-0">
          <button
            type="button"
            className={cn('md:hidden', solid ? 'text-ink' : 'text-ivory')}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-wide2 md:text-3xl',
              solid ? 'text-ink' : 'text-ivory'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                'text-[11px] uppercase tracking-wide2 transition-colors duration-300 hover:text-gold',
                solid ? 'text-ink' : 'text-ivory'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
            aria-label="Search"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
            aria-label="Open cart"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-sand bg-ivory md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-wide2 text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
