import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Header({ onOpenSearch }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const scrolled = useScrollPosition(40)
  const location = useLocation()
  const floating = location.pathname === '/' && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition duration-500',
          floating
            ? 'bg-transparent text-velmora-parchment'
            : 'border-b hairline-divider bg-velmora-parchment/95 text-velmora-noir shadow-[0_10px_30px_-25px_rgba(36,28,27,0.45)] backdrop-blur-md',
        )}
      >
        <div className="container-shell flex h-20 items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/10 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="font-serif text-2xl tracking-luxeWide md:text-3xl">
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-xs font-medium uppercase tracking-luxe transition',
                    isActive
                      ? 'text-velmora-gold'
                      : floating
                        ? 'text-velmora-parchment/90 hover:text-white'
                        : 'text-velmora-noir hover:text-velmora-gold',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/10 transition hover:border-velmora-gold hover:text-velmora-gold"
              onClick={onOpenSearch}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/10 transition hover:border-velmora-gold hover:text-velmora-gold"
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-noir">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      <div
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
        className={cn('fixed inset-0 z-50 bg-velmora-noir/50 transition md:hidden', menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')}
      >
        <aside
          aria-hidden={!menuOpen}
          className={cn('h-full w-[82%] max-w-sm bg-velmora-parchment p-6 text-velmora-noir shadow-velvet transition duration-300', menuOpen ? 'translate-x-0' : '-translate-x-full')}
        >
          <div className="mb-10 flex items-center justify-between">
            <Link to="/" className="font-serif text-2xl tracking-luxeWide" onClick={() => setMenuOpen(false)}>
              VELMORA
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-espresso/10"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-semibold uppercase tracking-luxe text-velmora-noir"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-10 rounded-[1.75rem] bg-white/80 p-5 text-sm leading-7 text-velmora-espresso/75">
            Thoughtfully crafted demi-fine pieces made for daily rituals, gifting moments, and understated glamour.
          </div>
        </aside>
      </div>
    </>
  )
}
