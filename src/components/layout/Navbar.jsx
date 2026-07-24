import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-elegant',
        transparent ? 'bg-transparent' : 'bg-cream-soft/95 backdrop-blur-md shadow-card'
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 md:px-10 lg:px-16 py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={cn('h-5 w-5', transparent ? 'text-cream-soft' : 'text-ink')} />
            ) : (
              <Menu className={cn('h-5 w-5', transparent ? 'text-cream-soft' : 'text-ink')} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-widest3 transition-colors',
              transparent ? 'text-cream-soft' : 'text-ink'
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                'text-[11px] uppercase tracking-widest2 transition-colors hover:text-gold',
                transparent ? 'text-cream-soft' : 'text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', transparent ? 'text-cream-soft' : 'text-ink')}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Cart"
            className={cn('relative transition-colors hover:text-gold', transparent ? 'text-cream-soft' : 'text-ink')}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-medium text-cream-soft">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-ink/10 bg-cream-soft">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 text-sm uppercase tracking-widest2 text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
