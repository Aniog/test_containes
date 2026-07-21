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

// Transparent over hero, becomes solid cream on scroll past 24px.
export default function Navbar() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Hero pages get the transparent treatment; everything else is always solid.
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const overHero = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-soft',
          overHero
            ? 'bg-transparent border-b border-cream/0 text-cream'
            : 'bg-cream/95 backdrop-blur-sm border-b border-line/60 text-espresso'
        )}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-2 md:gap-0 flex-1">
            <button
              type="button"
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            </button>
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-[0.32em] font-medium"
              aria-label="Velmora — home"
            >
              VELMORA
            </Link>
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'eyebrow transition-colors duration-300',
                    isActive
                      ? overHero
                        ? 'text-gold-soft'
                        : 'text-gold'
                      : overHero
                      ? 'text-cream/80 hover:text-cream'
                      : 'text-ink/80 hover:text-ink'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center gap-1 md:gap-2 flex-1 justify-end">
            <button
              type="button"
              className="p-2 hidden sm:inline-flex"
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              className="p-2 relative"
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
              <span
                className={cn(
                  'absolute -bottom-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center transition-all duration-300',
                  itemCount > 0
                    ? 'bg-espresso text-cream opacity-100 scale-100'
                    : 'opacity-0 scale-90',
                  overHero && itemCount > 0 ? 'bg-cream text-espresso' : ''
                )}
                aria-hidden={itemCount === 0}
              >
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            'absolute top-0 left-0 h-full w-[82%] max-w-sm bg-cream shadow-xl',
            'transition-transform duration-500 ease-out-soft',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-line">
            <span className="font-serif text-xl tracking-[0.32em]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col py-8 px-6 gap-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'font-serif text-2xl',
                    isActive ? 'text-gold italic' : 'text-espresso'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <span className="hairline mt-4" />
            <button type="button" className="flex items-center gap-3 text-ink/80 pt-2">
              <Search className="w-4 h-4" strokeWidth={1.4} />
              <span className="eyebrow">Search</span>
            </button>
          </nav>
        </aside>
      </div>
    </>
  )
}
