import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?collection=all' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const { count, toggleCart } = useCart()
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

  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-velmora-ivory/95 text-velmora-charcoal shadow-sm backdrop-blur',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.15em] md:text-3xl"
          aria-label="Velmora home"
        >
          VELMORA
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="relative py-2 transition-colors hover:text-velmora-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            className="p-2 transition-colors hover:text-velmora-gold"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={toggleCart}
            className="relative p-2 transition-colors hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-500 md:hidden',
          mobileOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0',
          isTransparent ? 'bg-transparent' : 'bg-velmora-ivory',
        )}
      >
        <ul className="flex flex-col px-4 py-4 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block py-3 transition-colors hover:text-velmora-gold"
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
