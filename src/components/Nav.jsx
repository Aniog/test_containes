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
  const { pathname } = useLocation()

  // Home page hero is dark, so nav starts transparent with light text.
  // Other pages start solid.
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const solid = scrolled || !isHome

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          solid
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand py-4'
            : 'bg-transparent py-6'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Left: mobile menu + logo on mobile */}
          <div className="flex items-center gap-4 md:flex-1">
            <button
              type="button"
              className={cn('md:hidden', solid ? 'text-ink' : 'text-ivory')}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu width={22} height={22} strokeWidth={1.5} />
            </button>
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium transition-colors',
                solid ? 'text-ink' : 'text-ivory'
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10 md:flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  'font-sans text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-gold',
                  solid ? 'text-charcoal' : 'text-ivory/90'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: search + cart */}
          <div className="flex items-center gap-5 md:flex-1 justify-end">
            <button
              type="button"
              className={cn('transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-ivory')}
              aria-label="Search"
            >
              <Search width={20} height={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn('relative transition-colors hover:text-gold', solid ? 'text-charcoal' : 'text-ivory')}
              aria-label="Open cart"
            >
              <ShoppingBag width={20} height={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ink">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-[80%] max-w-sm bg-ivory p-8 transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif text-2xl tracking-[0.25em] text-ink">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-ink">
              <X width={22} height={22} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="font-serif text-2xl text-ink tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
