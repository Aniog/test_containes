import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { count, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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

  const submitSearch = (event) => {
    event.preventDefault()
    const query = searchValue.trim()
    navigate(query ? `/shop?q=${encodeURIComponent(query)}` : '/shop')
    setSearchOpen(false)
    setSearchValue('')
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-luxe',
          transparent
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-line bg-cream/95 shadow-[0_8px_30px_-18px_rgba(28,23,16,0.35)] backdrop-blur-md'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          <div className="flex w-24 items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn(
                'p-2 transition-colors',
                transparent ? 'text-cream hover:text-gold' : 'text-ink hover:text-gold-deep'
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <Link
            to="/"
            className={cn(
              'font-serif text-xl font-semibold uppercase tracking-[0.3em] transition-colors sm:text-2xl',
              transparent ? 'text-cream' : 'text-ink'
            )}
          >
            Velmora
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'group relative text-[11px] font-semibold uppercase tracking-luxe transition-colors',
                    transparent
                      ? 'text-cream/90 hover:text-cream'
                      : 'text-ink/80 hover:text-ink',
                    isActive && (transparent ? 'text-gold' : 'text-gold-deep')
                  )
                }
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-luxe group-hover:w-full'
                  )}
                  aria-hidden="true"
                />
              </NavLink>
            ))}
          </nav>

          <div className="flex w-24 items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
              aria-expanded={searchOpen}
              className={cn(
                'p-2 transition-colors',
                transparent ? 'text-cream hover:text-gold' : 'text-ink hover:text-gold-deep'
              )}
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className={cn(
                'relative p-2 transition-colors',
                transparent ? 'text-cream hover:text-gold' : 'text-ink hover:text-gold-deep'
              )}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden border-b border-line bg-cream transition-all duration-500 ease-luxe',
            searchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4 sm:px-8"
          >
            <Search className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              aria-label="Search products"
              className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-mocha/70 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep transition-colors hover:text-ink"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="p-1 text-mocha transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 animate-overlay-in bg-ink/50 backdrop-blur-sm"
          />
          <div className="animate-drawer-in absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col bg-cream shadow-[0_24px_60px_-24px_rgba(28,23,16,0.4)]">
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <span className="font-serif text-lg font-semibold uppercase tracking-[0.3em] text-ink">
                Velmora
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-ink transition-colors hover:text-gold-deep"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
              {[{ to: '/', label: 'Home' }, ...NAV_LINKS].map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={({ isActive }) =>
                    cn(
                      'animate-fade-up border-b border-line/70 py-4 font-serif text-2xl font-medium text-ink transition-colors hover:text-gold-deep',
                      isActive && 'text-gold-deep'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <p className="mt-auto px-6 pb-8 text-xs leading-relaxed text-mocha">
              Demi-fine jewelry, crafted to be treasured. Free worldwide shipping on every order.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
