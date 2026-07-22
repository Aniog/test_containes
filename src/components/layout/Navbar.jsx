import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-cream/95 py-3 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className={cn(
            'p-2 md:hidden',
            scrolled || !isHome ? 'text-espresso' : 'text-white'
          )}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className={cn(
            'font-serif text-2xl font-medium tracking-widest transition-colors',
            scrolled || !isHome ? 'text-espresso' : 'text-white'
          )}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold',
                scrolled || !isHome ? 'text-espresso' : 'text-white/90'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className={cn(
              'p-2 transition-colors hover:text-gold',
              scrolled || !isHome ? 'text-espresso' : 'text-white'
            )}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={openCart}
            className={cn(
              'relative p-2 transition-colors hover:text-gold',
              scrolled || !isHome ? 'text-espresso' : 'text-white'
            )}
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-cream transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-hairline px-4 py-4">
          <span className="font-serif text-xl tracking-widest">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-hairline py-4 font-serif text-2xl tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
