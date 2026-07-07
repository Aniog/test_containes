import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Journal', path: '/journal' },
]

export default function Navbar() {
  const { itemCount, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const transparent = isHome && !scrolled && !mobileMenuOpen

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-400',
        transparent
          ? 'bg-transparent text-cream'
          : 'bg-cream/95 text-espresso shadow-sm backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        <button
          type="button"
          className="flex md:hidden p-1"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-[0.18em] font-semibold uppercase"
        >
          Velmora
        </Link>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="font-sans text-xs uppercase tracking-[0.14em] text-current/80 hover:text-current transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="p-1 transition-opacity hover:opacity-70"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative p-1 transition-opacity hover:opacity-70"
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-cream text-espresso transition-transform duration-300 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-serif text-xl tracking-[0.18em] font-semibold uppercase">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col px-8 pt-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
