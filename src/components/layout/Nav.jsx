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

export default function Nav() {
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

  // Transparent over hero only on the homepage top; solid elsewhere.
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm'
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
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
              ) : (
                <Menu className={cn('w-5 h-5', solid ? 'text-ink' : 'text-ivory')} />
              )}
            </button>
            <ul className="hidden md:flex items-center gap-8">
              {links.slice(0, 2).map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} label={l.label} solid={solid} />
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.3em] font-medium"
            style={{ color: solid ? '#2A2420' : '#F7F3EE' }}
          >
            VELMORA
          </Link>

          {/* Right: links + icons */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            <ul className="hidden md:flex items-center gap-8">
              {links.slice(2).map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} label={l.label} solid={solid} />
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Search"
              className="p-1 hidden sm:block"
            >
              <Search className={cn('w-[18px] h-[18px]', solid ? 'text-ink' : 'text-ivory')} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              className="relative p-1"
              onClick={openCart}
            >
              <ShoppingBag className={cn('w-[18px] h-[18px]', solid ? 'text-ink' : 'text-ivory')} />
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
        <div className="md:hidden bg-ivory border-t border-sand">
          <ul className="px-5 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="block py-3 text-ink text-sm tracking-[0.15em] uppercase border-b border-sand/60"
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

function NavLink({ to, label, solid }) {
  return (
    <Link
      to={to}
      className={cn(
        'text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold',
        solid ? 'text-ink' : 'text-ivory/90'
      )}
    >
      {label}
    </Link>
  )
}
