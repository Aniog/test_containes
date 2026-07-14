import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-line text-ink py-3'
          : 'bg-transparent text-ivory py-5',
      )}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4 flex-1">
          <button
            type="button"
            className="md:hidden -ml-1"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-[26px] tracking-[0.3em] font-semibold leading-none"
          >
            VELMORA
          </Link>
        </div>

        {/* Center: links */}
        <div className="hidden md:flex items-center gap-9 flex-1 justify-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'text-[11px] uppercase tracking-widest2 font-medium transition-colors duration-300 hover:text-champagne',
                  isActive && 'text-champagne',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
          <button
            type="button"
            aria-label="Search"
            className="transition-colors duration-300 hover:text-champagne"
          >
            <Search size={19} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative transition-colors duration-300 hover:text-champagne"
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-champagne text-ink text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-400 bg-ivory text-ink border-b border-line',
          mobileOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'py-3 text-sm uppercase tracking-widest2 font-medium border-b border-line/60',
                  isActive ? 'text-champagne' : 'text-ink',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
