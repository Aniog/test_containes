import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navigationLinks } from '@/data/store.js'
import { useCart } from '@/context/CartContext.jsx'
import { cn } from '@/lib/utils'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20 || location.pathname !== '/')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navTone =
    scrolled || mobileOpen
      ? 'border-stone-200/80 bg-stone-50/95 text-stone-900 shadow-[0_12px_32px_rgba(28,25,23,0.08)] backdrop-blur-xl'
      : 'border-transparent bg-transparent text-stone-100'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-4 transition duration-300 md:px-8',
          navTone,
        )}
      >
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((current) => !current)}
            className="rounded-full border border-current/15 p-2"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className="font-display text-2xl uppercase tracking-[0.38em]"
        >
          VELMORA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.3em] transition hover:opacity-70',
                  isActive && 'opacity-70',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full border border-current/15 p-2 transition hover:bg-white/10"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={toggleCart}
            className="relative rounded-full border border-current/15 p-2 transition hover:bg-white/10"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-900">
              {itemCount}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-stone-200 bg-stone-50 p-6 text-stone-900 shadow-[0_20px_60px_rgba(28,25,23,0.12)] md:hidden">
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-[0.28em] text-stone-700"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
