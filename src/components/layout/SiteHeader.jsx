import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export const SiteHeader = () => {
  const location = useLocation()
  const { itemCount, toggleCart } = useCart()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 48)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  const isHome = location.pathname === '/'
  const lightText = isHome && !hasScrolled

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-all duration-500',
          hasScrolled || !isHome
            ? 'border-b border-brand-line/80 bg-brand-mist/95 shadow-soft backdrop-blur'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className={cn(
                'rounded-full border p-3 transition',
                lightText
                  ? 'border-white/30 bg-white/10 text-white'
                  : 'border-brand-line bg-white text-brand-ink',
              )}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          <Link
            to="/"
            className={cn(
              'font-serif text-3xl tracking-[0.34em] transition-colors',
              lightText ? 'text-white' : 'text-brand-ink',
            )}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-xs font-semibold uppercase tracking-overline transition-colors',
                    lightText ? 'text-white/80 hover:text-white' : 'text-brand-cocoa hover:text-brand-ink',
                    isActive && !link.to.includes('#') && (lightText ? 'text-white' : 'text-brand-ink'),
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className={cn(
                'rounded-full border p-3 transition',
                lightText
                  ? 'border-white/30 bg-white/10 text-white'
                  : 'border-brand-line bg-white text-brand-ink',
              )}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className={cn(
                'relative rounded-full border p-3 transition',
                lightText
                  ? 'border-white/30 bg-white/10 text-white'
                  : 'border-brand-line bg-white text-brand-ink',
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-[10px] font-bold text-brand-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-x-5 top-20 z-20 rounded-3xl border bg-brand-mist/95 p-5 shadow-panel backdrop-blur transition-all duration-300 md:hidden',
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="rounded-full border border-brand-line bg-white px-4 py-3 text-sm font-semibold uppercase tracking-overline text-brand-ink"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
