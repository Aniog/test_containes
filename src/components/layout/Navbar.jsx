import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Transparent over hero only on home + not scrolled; solid otherwise.
  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxury',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-sand text-ink py-3'
          : 'bg-transparent text-ivory py-5',
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 flex-1">
          <button
            type="button"
            className="md:hidden -ml-1 p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X width={22} height={22} /> : <Menu width={22} height={22} />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-[28px] tracking-[0.3em] leading-none"
            onClick={() => setMobileOpen(false)}
          >
            VELMORA
          </Link>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.22em] font-medium hover:text-champagne transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button
            type="button"
            className="p-1 hover:text-champagne transition-colors duration-300"
            aria-label="Search"
          >
            <Search width={20} height={20} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative p-1 hover:text-champagne transition-colors duration-300"
            aria-label="Open cart"
          >
            <ShoppingBag width={20} height={20} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-champagne text-ivory text-[10px] font-sans font-medium min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-500 ease-luxury bg-ivory text-ink border-t border-sand',
          mobileOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-2xl tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
