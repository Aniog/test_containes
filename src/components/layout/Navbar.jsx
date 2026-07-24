import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent over hero on the homepage top; solid elsewhere.
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-500',
        solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + desktop nav */}
        <div className="flex items-center gap-8 flex-1">
          <button
            type="button"
            className="md:hidden text-ink"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={cn(
                    'text-xs uppercase tracking-widest3 transition-colors duration-300',
                    solid ? 'text-ink hover:text-champagne-deep' : 'text-cream hover:text-champagne'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: logo */}
        <Link
          to="/"
          className={cn(
            'font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors duration-500',
            solid ? 'text-ink' : 'text-cream'
          )}
        >
          VELMORA
        </Link>

        {/* Right: nav + icons */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(2).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={cn(
                    'text-xs uppercase tracking-widest3 transition-colors duration-300',
                    solid ? 'text-ink hover:text-champagne-deep' : 'text-cream hover:text-champagne'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors duration-300', solid ? 'text-ink hover:text-champagne-deep' : 'text-cream hover:text-champagne')}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn('relative transition-colors duration-300', solid ? 'text-ink hover:text-champagne-deep' : 'text-cream hover:text-champagne')}
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-champagne text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-line animate-overlay-in">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="block py-3 text-sm uppercase tracking-widest3 text-ink hover:text-champagne-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
