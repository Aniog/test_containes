import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar({ transparent = false }) {
  const scrolled = useScrollHeader(40)
  const { itemCount, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isTransparent = transparent && isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-lux',
          isTransparent
            ? 'bg-transparent text-cream'
            : 'bg-cream/95 text-espresso shadow-sm backdrop-blur-md'
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="font-serif text-xl tracking-widest-plus sm:text-2xl"
            aria-label="Velmora Fine Jewelry home"
          >
            VELMORA
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full p-2 transition-colors hover:bg-espresso/5"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative rounded-full p-2 transition-colors hover:bg-espresso/5"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-cream-light">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-full p-2 transition-colors hover:bg-espresso/5 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-cream transition-transform duration-300 ease-lux md:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-2xl tracking-widest-plus text-espresso"
          >
            VELMORA
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="rounded-full p-2 text-espresso"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6 pt-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl tracking-wide text-espresso transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
