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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md border-b border-sand shadow-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo on mobile */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className={cn(
                'md:hidden transition-colors',
                transparent ? 'text-cream' : 'text-ink'
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Center links (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {links.slice(0, 2).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={cn(
                    'text-xs uppercase tracking-widest2 transition-colors hover:text-champagne',
                    transparent ? 'text-cream' : 'text-mocha'
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            VELMORA
          </Link>

          {/* Right */}
          <div className="flex items-center gap-5 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-8 mr-2">
              {links.slice(2).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={cn(
                    'text-xs uppercase tracking-widest2 transition-colors hover:text-champagne',
                    transparent ? 'text-cream' : 'text-mocha'
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              aria-label="Search"
              className={cn(
                'transition-colors hover:text-champagne',
                transparent ? 'text-cream' : 'text-mocha'
              )}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              onClick={openCart}
              className={cn(
                'relative transition-colors hover:text-champagne',
                transparent ? 'text-cream' : 'text-mocha'
              )}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-champagne text-ink text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 text-mocha hover:text-champagne"
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
