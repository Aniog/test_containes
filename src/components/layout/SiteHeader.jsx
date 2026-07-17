import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useCart } from '../../context/CartContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function SiteHeader() {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparentMode = isHome && !isScrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-velvet',
          transparentMode
            ? 'bg-transparent text-velmora-parchment'
            : 'border-b border-velmora-ink/10 bg-velmora-parchment/95 text-velmora-ink shadow-card backdrop-blur-xl',
        )}
      >
        <div className="section-shell">
          <div className="section-frame flex h-20 items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 lg:hidden"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <Link
                to="/"
                className="font-display text-3xl tracking-[0.35em] text-current"
              >
                VELMORA
              </Link>
            </div>

            <nav className="hidden items-center justify-center gap-10 lg:flex">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'text-xs uppercase tracking-luxe transition-colors duration-300',
                      isActive ? 'text-velmora-champagne' : 'text-current/80 hover:text-current',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="ml-auto flex items-center justify-end gap-2">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-semibold text-velmora-ink">
                  {itemCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-x-5 top-24 z-40 rounded-[28px] border border-velmora-ink/10 bg-velmora-parchment/95 p-6 shadow-float backdrop-blur xl:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col gap-5">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm uppercase tracking-luxe text-velmora-cocoa transition-colors duration-300 hover:text-velmora-ink',
                  isActive && 'text-velmora-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
