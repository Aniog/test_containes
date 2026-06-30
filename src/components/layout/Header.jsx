import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { navLinks } from '@/data/storefront'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out',
          transparent
            ? 'bg-transparent text-stone-50'
            : 'border-b border-stone-200/80 bg-stone-50/95 text-stone-900 backdrop-blur-md',
        )}
      >
        <div className="page-shell flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <Link to="/" className="font-serif text-3xl tracking-[0.35em] sm:text-4xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'transition-colors duration-300 hover:text-amber-300',
                    !transparent && isActive && 'text-amber-700',
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20"
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag size={18} />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-900">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-stone-200 bg-stone-50 text-stone-900 lg:hidden">
            <div className="page-shell flex flex-col gap-3 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className="text-sm uppercase tracking-[0.28em] text-stone-700"
                >
                  {link.label}
                </NavLink>
              ))}
              <Button variant="accent" size="lg" className="mt-3 w-full" onClick={openCart}>
                View Cart
              </Button>
            </div>
          </div>
        ) : null}
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  )
}

export default Header
