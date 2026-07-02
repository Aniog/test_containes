import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navigationLinks } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, openCart } = useCart()
  const isHome = location.pathname === '/'
  const transparentMode = isHome && !isScrolled && !isMobileMenuOpen

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        transparentMode
          ? 'border-transparent bg-transparent text-stone-50'
          : 'border-stone-200/80 bg-stone-50/95 text-stone-900 shadow-sm backdrop-blur-xl',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="font-display text-2xl tracking-[0.34em]">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.28em] transition hover:opacity-70',
                  isActive ? 'opacity-100' : 'opacity-80',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/5"
            onClick={() => navigate('/shop')}
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/5"
            onClick={openCart}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-300 px-1 text-[10px] font-semibold text-stone-950">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-4 text-stone-900 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.25em] transition',
                    isActive
                      ? 'bg-stone-900 text-stone-50'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
