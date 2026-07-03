import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const CENTER_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Nav() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Decide whether to use the "transparent over hero" treatment: home
  // AND at the top. Everywhere else, solid ivory.
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen && !searchOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          transparent
            ? 'bg-transparent text-ivory-50'
            : 'bg-ivory-50/95 backdrop-blur-sm text-ink-900 border-b border-ink-900/10',
        )}
      >
        <div className="container-x">
          <div className="grid grid-cols-3 items-center h-16 lg:h-20">
            {/* Mobile menu trigger */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-2 -ml-2"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center justify-center lg:justify-start col-start-2 lg:col-start-1 lg:col-span-1"
              aria-label="Velmora, home"
            >
              <span
                className={cn(
                  'font-serif tracking-[0.32em] text-[20px] lg:text-[22px] font-medium',
                )}
              >
                VELMORA
              </span>
            </Link>

            {/* Center links */}
            <nav className="hidden lg:flex items-center justify-center gap-10 col-start-2">
              {CENTER_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'nav-link',
                      transparent && 'nav-link-light',
                      isActive && 'text-ink-900',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center justify-end gap-1 lg:gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
                className="p-2 hidden sm:inline-flex hover:opacity-70 transition-opacity"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </button>
              <Link
                to="/account"
                aria-label="Account"
                className="p-2 hidden sm:inline-flex hover:opacity-70 transition-opacity"
              >
                <User className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </Link>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Cart, ${count} items`}
                className="p-2 relative hover:opacity-70 transition-opacity"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
                {count > 0 && (
                  <span
                    className={cn(
                      'absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center',
                      transparent
                        ? 'bg-ivory-50 text-ink-900'
                        : 'bg-ink-900 text-ivory-50',
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div
          className={cn(
            'overflow-hidden transition-[max-height,opacity] duration-500',
            searchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="container-x pb-6">
            <div className="flex items-center gap-3 border-b border-current/30 pb-3">
              <Search className="w-4 h-4 opacity-60" strokeWidth={1.4} />
              <input
                type="search"
                placeholder="Search earrings, necklaces, huggies..."
                className="flex-1 bg-transparent text-[15px] outline-none placeholder:opacity-50"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-[11px] uppercase tracking-[0.22em] opacity-70 hover:opacity-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink-900/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[88%] max-w-[360px] bg-ivory-50 text-ink-900 p-6 transition-transform duration-500',
            mobileOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif tracking-[0.32em] text-[20px]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {CENTER_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="py-3 text-[15px] font-serif border-b border-ink-900/10"
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/account" className="py-3 text-[15px] font-serif border-b border-ink-900/10">
              Account
            </Link>
          </nav>
          <p className="mt-10 text-[12px] uppercase tracking-[0.22em] text-ink-500">
            Free worldwide shipping · 30-day returns
          </p>
        </aside>
      </div>
    </>
  )
}
