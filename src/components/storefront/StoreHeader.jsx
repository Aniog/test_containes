import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#categories' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function StoreHeader({ cartCount, onOpenCart }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isTransparent = useMemo(
    () => pathname === '/' && !scrolled && !menuOpen,
    [menuOpen, pathname, scrolled],
  )

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition duration-300',
          isTransparent
            ? 'bg-transparent text-mist'
            : 'border-b border-line/70 bg-parchment/95 text-ink backdrop-blur-xl',
        )}
      >
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <Link to="/" className="font-serif text-3xl tracking-[0.24em] sm:text-4xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm uppercase tracking-button transition',
                    isActive ? 'text-gold' : isTransparent ? 'text-mist/90 hover:text-gold' : 'text-muted hover:text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/shop"
              aria-label="Search products"
              className={cn(
                'grid h-11 w-11 place-items-center rounded-full border transition',
                isTransparent
                  ? 'border-mist/25 bg-white/5 text-mist hover:border-gold hover:text-gold'
                  : 'border-line bg-surface text-ink hover:border-gold hover:text-gold',
              )}
            >
              <Search className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Open cart"
              className={cn(
                'relative grid h-11 w-11 place-items-center rounded-full border transition',
                isTransparent
                  ? 'border-mist/25 bg-white/5 text-mist hover:border-gold hover:text-gold'
                  : 'border-line bg-surface text-ink hover:border-gold hover:text-gold',
              )}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((current) => !current)}
              className={cn(
                'grid h-11 w-11 place-items-center rounded-full border transition md:hidden',
                isTransparent
                  ? 'border-mist/25 bg-white/5 text-mist hover:border-gold hover:text-gold'
                  : 'border-line bg-surface text-ink hover:border-gold hover:text-gold',
              )}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'border-t border-line/50 bg-parchment md:hidden',
            menuOpen ? 'block' : 'hidden',
          )}
        >
          <div className="section-shell grid gap-1 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-3 text-sm uppercase tracking-button transition',
                    isActive ? 'bg-ink text-mist' : 'text-ink hover:bg-surface',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
      <div className="h-20" />
    </>
  )
}
