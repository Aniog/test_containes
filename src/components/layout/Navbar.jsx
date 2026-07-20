import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
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

  // Transparent over hero only on the homepage top
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md border-b border-ink/10'
      )}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={cn('h-5 w-5', transparent ? 'text-cream' : 'text-ink')} strokeWidth={1.5} />
            ) : (
              <Menu className={cn('h-5 w-5', transparent ? 'text-cream' : 'text-ink')} strokeWidth={1.5} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] md:text-3xl',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                'text-[11px] font-medium uppercase tracking-widest2 transition-colors',
                transparent
                  ? 'text-cream/90 hover:text-gold'
                  : 'text-ink/80 hover:text-gold'
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className={cn(transparent ? 'text-cream' : 'text-ink', 'transition-colors hover:text-gold')}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              'relative transition-colors hover:text-gold',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <div className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="py-3 text-sm font-medium uppercase tracking-widest2 text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
