import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Solid nav on non-home pages, or when scrolled on home
  const solid = !isHome || scrolled || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-champagne/40 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', solid ? 'text-ink' : 'text-cream')} />
              ) : (
                <Menu className={cn('w-5 h-5', solid ? 'text-ink' : 'text-cream')} />
              )}
            </button>
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.3em] font-medium transition-colors',
                solid ? 'text-ink' : 'text-cream'
              )}
              onClick={() => setMobileOpen(false)}
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  'text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-gold',
                  solid ? 'text-charcoal' : 'text-cream/90'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: search + cart */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <button
              type="button"
              aria-label="Search"
              className={cn('transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-cream')}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn('relative transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-cream')}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ink text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-champagne/40">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-gold"
                onClick={() => setMobileOpen(false)}
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
