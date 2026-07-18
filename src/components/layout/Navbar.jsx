import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
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

  // Transparent over the homepage hero; solid everywhere else / on scroll.
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'bg-cream/95 backdrop-blur-md border-b border-hairline'
      )}
    >
      <nav className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-8 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X size={22} className={transparent ? 'text-cream' : 'text-ink'} />
              ) : (
                <Menu size={22} className={transparent ? 'text-cream' : 'text-ink'} />
              )}
            </button>
            <ul className="hidden md:flex items-center gap-9">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        'text-[11px] uppercase tracking-[0.2em] transition-colors duration-300',
                        transparent ? 'text-cream/90 hover:text-cream' : 'text-charcoal hover:text-gold',
                        isActive && (transparent ? 'text-cream' : 'text-gold')
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-500',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            VELMORA
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <button
              type="button"
              aria-label="Search"
              className={cn('transition-colors duration-300', transparent ? 'text-cream hover:text-cream/70' : 'text-charcoal hover:text-gold')}
            >
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn('relative transition-colors duration-300', transparent ? 'text-cream hover:text-cream/70' : 'text-charcoal hover:text-gold')}
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-hairline animate-fade-in">
          <ul className="px-6 py-6 space-y-5">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      'block text-sm uppercase tracking-[0.2em] py-1',
                      isActive ? 'text-gold' : 'text-charcoal'
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
