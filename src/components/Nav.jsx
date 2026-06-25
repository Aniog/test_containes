import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Transparent over hero only on the homepage top; solid elsewhere.
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* left: mobile menu + desktop links */}
        <div className="flex flex-1 items-center gap-6">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {links.slice(0, 2).map((l) => (
              <NavItem key={l.to} {...l} dark={transparent} />
            ))}
          </nav>
        </div>

        {/* center: logo */}
        <Link
          to="/"
          className={cn(
            'font-serif text-2xl tracking-[0.3em] transition-colors',
            transparent ? 'text-ivory' : 'text-ink'
          )}
        >
          VELMORA
        </Link>

        {/* right: links + icons */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <nav className="hidden md:flex items-center gap-7">
            {links.slice(2).map((l) => (
              <NavItem key={l.to} {...l} dark={transparent} />
            ))}
          </nav>
          <button
            type="button"
            aria-label="Search"
            className={cn('transition-colors', transparent ? 'text-ivory hover:text-gold' : 'text-ink hover:text-gold-deep')}
          >
            <Search size={19} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className={cn('relative transition-colors', transparent ? 'text-ivory hover:text-gold' : 'text-ink hover:text-gold-deep')}
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden border-t border-sand bg-ivory transition-all duration-300',
          mobileOpen ? 'max-h-96' : 'max-h-0 border-t-0'
        )}
      >
        <nav className="flex flex-col px-5 py-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="py-3 text-sm uppercase tracking-[0.2em] text-ink border-b border-sand last:border-0"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function NavItem({ to, label, dark }) {
  return (
    <NavLink
      to={to}
      className={cn(
        'text-xs uppercase tracking-[0.2em] transition-colors',
        dark ? 'text-ivory/90 hover:text-gold' : 'text-ink hover:text-gold-deep'
      )}
    >
      {label}
    </NavLink>
  )
}

export default Nav
