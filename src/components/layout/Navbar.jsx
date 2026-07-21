import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=sets' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBackground = isHome
    ? scrolled
      ? 'bg-cream/95 shadow-sm backdrop-blur-md'
      : 'bg-transparent'
    : 'bg-cream/95 shadow-sm backdrop-blur-md'

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-charcoal'

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        navBackground
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className={cn('p-1 lg:hidden', textColor)}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={cn(
                  'font-sans text-xs font-medium uppercase tracking-wide transition-colors hover:text-accent',
                  textColor
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className={cn(
            'absolute left-1/2 -translate-x-1/2 font-serif text-xl font-semibold uppercase tracking-brand transition-colors',
            textColor
          )}
        >
          Velmora
        </Link>

        <div className={cn('flex items-center gap-4', textColor)}>
          <button
            type="button"
            className="p-1 transition-colors hover:text-accent"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="relative p-1 transition-colors hover:text-accent"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Cart with ${totalItems} items`}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-cream transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : 'invisible -translate-x-full'
        )}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? 'true' : undefined}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="font-serif text-xl font-semibold uppercase tracking-brand text-charcoal"
          >
            Velmora
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-1 text-charcoal"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <ul className="mt-8 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-serif text-2xl font-medium text-charcoal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
