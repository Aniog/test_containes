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
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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
          ? 'bg-velmora-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(226,216,200,0.8)]'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className={solid ? 'text-velmora-ink' : 'text-white'} />
            ) : (
              <Menu size={22} className={solid ? 'text-velmora-ink' : 'text-white'} />
            )}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.3em] transition-colors md:text-[1.7rem]',
              solid ? 'text-velmora-ink' : 'text-white',
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Center: links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                'text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-velmora-gold',
                solid ? 'text-velmora-ink' : 'text-white/90',
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors hover:text-velmora-gold', solid ? 'text-velmora-ink' : 'text-white')}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn('relative transition-colors hover:text-velmora-gold', solid ? 'text-velmora-ink' : 'text-white')}
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-velmora-line bg-velmora-cream transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0',
        )}
      >
        <div className="flex flex-col px-5 py-2">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="border-b border-velmora-line/60 py-4 text-xs uppercase tracking-[0.2em] text-velmora-ink last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
