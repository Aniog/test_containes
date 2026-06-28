import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navigationLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Header() {
  const location = useLocation()
  const { itemCount, openCart, openSearch } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.search])

  const isHomeTop = useMemo(
    () => location.pathname === '/' && !scrolled,
    [location.pathname, scrolled],
  )

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition duration-500',
          isHomeTop
            ? 'bg-transparent text-velmora-ivory'
            : 'border-b border-velmora-line/80 bg-velmora-ivory/90 text-velmora-ink backdrop-blur-xl',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>

          <Link
            to="/"
            className="font-display text-2xl tracking-brand sm:text-3xl"
            aria-label="Velmora Fine Jewelry home"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'text-sm uppercase tracking-product transition duration-300 hover:text-velmora-gold',
                    isActive && 'text-velmora-gold',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openSearch}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition duration-300 hover:border-current/40"
              aria-label="Search products"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition duration-300 hover:border-current/40"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-noir">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-velmora-noir/60 backdrop-blur-sm transition duration-300 lg:hidden',
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMobileMenuOpen(false)}
      />
      <aside
        className={cn(
          'fixed left-0 top-0 z-[60] flex h-full w-[88%] max-w-sm flex-col bg-velmora-ivory px-6 py-6 text-velmora-ink shadow-velmora-card transition duration-500 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-line pb-5">
          <span className="font-display text-2xl tracking-brand">VELMORA</span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-5">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'border-b border-velmora-line pb-4 text-sm uppercase tracking-product transition hover:text-velmora-gold',
                  isActive ? 'text-velmora-gold' : 'text-velmora-ink',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  )
}
