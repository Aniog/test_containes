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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Transparent over hero on home top; solid elsewhere.
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-line shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            className="md:hidden text-espresso"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors',
              solid ? 'text-espresso' : 'text-ivory'
            )}
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
                'text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-gold',
                solid ? 'text-cocoa' : 'text-ivory/90'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
          <button
            aria-label="Search"
            className={cn('transition-colors hover:text-gold', solid ? 'text-espresso' : 'text-ivory')}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className={cn('relative transition-colors hover:text-gold', solid ? 'text-espresso' : 'text-ivory')}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-line">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-cocoa hover:text-gold"
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
