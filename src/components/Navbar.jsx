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
  const location = useLocation()

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

  // Transparent over hero only on home and not scrolled; solid otherwise.
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-hairline'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-6 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1 p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
              ) : (
                <Menu className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
              )}
            </button>
            <ul className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={cn(
                      'text-[11px] uppercase tracking-widest2 font-medium transition-colors hover:text-gold',
                      solid ? 'text-ink' : 'text-ivory'
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className="flex-1 text-center"
            aria-label="Velmora home"
          >
            <span
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors',
                solid ? 'text-ink' : 'text-ivory'
              )}
            >
              VELMORA
            </span>
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <button
              type="button"
              aria-label="Search"
              className={cn('transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className={cn('relative transition-colors hover:text-gold', solid ? 'text-ink' : 'text-ivory')}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-hairline">
          <ul className="px-5 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="block text-sm uppercase tracking-widest2 text-ink py-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
