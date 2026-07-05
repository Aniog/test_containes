import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Pages that always use a solid (non-transparent) nav background
  const alwaysSolid = location.pathname !== '/'

  useEffect(() => {
    if (alwaysSolid) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [alwaysSolid])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isDark = !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out',
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-hairline text-espresso'
            : 'bg-transparent text-ivory',
        )}
      >
        <div className="container-page flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-xl md:text-2xl tracking-[0.32em] uppercase',
              'transition-colors duration-300',
            )}
            aria-label="Velmora home"
          >
            Velmora
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-[11px] uppercase tracking-widest2 font-medium relative py-1',
                    'after:content-[""] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300',
                    'hover:after:scale-x-100',
                    isActive && 'after:scale-x-100',
                    isActive ? 'after:bg-current' : 'after:bg-current',
                    isDark ? 'text-ivory' : 'text-espresso',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="p-1 hover:opacity-70 transition-opacity"
            >
              <Search className="w-5 h-5" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${count} ${count === 1 ? 'item' : 'items'}`}
              onClick={openCart}
              className="relative p-1 hover:opacity-70 transition-opacity"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
              {count > 0 && (
                <span
                  className={cn(
                    'absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] flex items-center justify-center font-medium',
                    scrolled ? 'bg-espresso text-ivory' : 'bg-ivory text-noir',
                  )}
                >
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-1 hover:opacity-70 transition-opacity"
            >
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-noir/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-ivory text-espresso shadow-elev flex flex-col animate-drawer-in">
            <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
              <span className="font-serif text-xl tracking-[0.32em] uppercase">Velmora</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-1"
              >
                <X className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-serif text-3xl py-3 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-6 border-t border-hairline text-[11px] uppercase tracking-widest2 text-taupe">
              Free worldwide shipping over $80
            </div>
          </div>
        </div>
      )}
    </>
  )
}
