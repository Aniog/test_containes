import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Sheet } from '@/components/ui/Sheet'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled || !isHome
            ? 'bg-paper/95 py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Mobile menu toggle */}
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu
              size={22}
              className={scrolled || !isHome ? 'text-ink' : 'text-cream'}
            />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl tracking-[0.15em] md:text-3xl',
              scrolled || !isHome ? 'text-ink' : 'text-cream',
            )}
          >
            VELMORA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold',
                  scrolled || !isHome ? 'text-ink' : 'text-cream',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className={cn(
                'p-2 transition-colors hover:text-gold',
                scrolled || !isHome ? 'text-ink' : 'text-cream',
              )}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className={cn(
                'relative p-2 transition-colors hover:text-gold',
                scrolled || !isHome ? 'text-ink' : 'text-cream',
              )}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-cream">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <Sheet open={mobileOpen} onClose={() => setMobileOpen(false)} title="Menu">
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-2xl text-ink transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Sheet>
    </>
  )
}
