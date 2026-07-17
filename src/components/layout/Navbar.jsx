import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar({ tone = 'auto' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()

  // tone: 'auto' = transparent over hero, 'solid' = always solid
  const isHeroRoute = location.pathname === '/'
  const isTransparent = tone === 'auto' && isHeroRoute && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md border-b border-taupeLight/60'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                'md:hidden -ml-2 p-2 transition-colors',
                isTransparent ? 'text-cream' : 'text-espresso'
              )}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            {/* Left: Logo (centered on mobile, left on desktop) */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-[26px] tracking-widest3 uppercase font-light leading-none',
                isTransparent ? 'text-cream' : 'text-espresso'
              )}
            >
              Velmora
            </Link>

            {/* Center nav (desktop only) */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'text-[11px] tracking-widest2 uppercase font-medium transition-colors duration-300',
                      isTransparent
                        ? 'text-cream hover:text-cream/70'
                        : 'text-espresso hover:text-gold-dark',
                      isActive && !isTransparent && 'text-gold-dark'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                className={cn(
                  'hidden sm:flex p-2.5 transition-colors',
                  isTransparent ? 'text-cream hover:text-cream/70' : 'text-espresso hover:text-gold-dark'
                )}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={openCart}
                className={cn(
                  'relative p-2.5 transition-colors',
                  isTransparent ? 'text-cream hover:text-cream/70' : 'text-espresso hover:text-gold-dark'
                )}
                aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? '' : 's'}`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      'absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full',
                      'flex items-center justify-center',
                      'text-[10px] font-medium leading-none',
                      isTransparent
                        ? 'bg-cream text-espresso'
                        : 'bg-espresso text-cream'
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            'absolute top-0 left-0 right-0 bg-cream border-b border-taupeLight/60',
            'transition-transform duration-500 ease-out',
            mobileOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <div className="px-6 py-5 flex items-center justify-between border-b border-taupeLight/60">
            <span className="font-serif text-xl tracking-widest3 uppercase font-light text-espresso">
              Velmora
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col py-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'px-6 py-4 text-[12px] tracking-widest2 uppercase font-medium',
                    'border-b border-taupeLight/40',
                    'transition-colors',
                    isActive ? 'text-gold-dark' : 'text-espresso hover:text-gold-dark'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
