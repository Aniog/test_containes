import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { cn } from '../lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={cn('w-5 h-5', scrolled || !isHome ? 'text-ink' : 'text-cream')} />
            ) : (
              <Menu className={cn('w-5 h-5', scrolled || !isHome ? 'text-ink' : 'text-cream')} />
            )}
          </button>

          {/* Left: Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl font-light tracking-[0.15em] transition-colors duration-300',
              scrolled || !isHome ? 'text-ink' : 'text-cream'
            )}
          >
            VELMORA
          </Link>

          {/* Center: Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:opacity-70',
                  scrolled || !isHome ? 'text-ink' : 'text-cream'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-3">
            <button
              className={cn(
                'p-2 transition-colors duration-300 hover:opacity-70',
                scrolled || !isHome ? 'text-ink' : 'text-cream'
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={cn(
                'relative p-2 transition-colors duration-300 hover:opacity-70',
                scrolled || !isHome ? 'text-ink' : 'text-cream'
              )}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-obsidian text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-stone-50 transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="pt-20 px-6 flex flex-col gap-6">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/collections', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-serif text-3xl text-ink tracking-wide hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-stone-200">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-muted mb-4">Help</p>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink-light">Shipping & Returns</span>
              <span className="text-sm text-ink-light">Contact Us</span>
              <span className="text-sm text-ink-light">FAQ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
