import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent over hero only on homepage; solid elsewhere.
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(226,217,205,0.8)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X size={22} className={solid ? 'text-ink' : 'text-ivory'} strokeWidth={1.5} />
            ) : (
              <Menu size={22} className={solid ? 'text-ink' : 'text-ivory'} strokeWidth={1.5} />
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

        {/* Center: nav links */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={cn(
                'text-xs uppercase tracking-widest2 transition-colors',
                solid
                  ? 'text-ink hover:text-gold'
                  : 'text-ivory/90 hover:text-ivory'
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors', solid ? 'text-ink hover:text-gold' : 'text-ivory')}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn('relative transition-colors', solid ? 'text-ink hover:text-gold' : 'text-ivory')}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
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
          'overflow-hidden border-t border-hairline bg-ivory transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="flex flex-col px-5 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="border-b border-hairline/60 py-3 text-sm uppercase tracking-widest2 text-ink last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
