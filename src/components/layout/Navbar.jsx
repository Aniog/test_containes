import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-sand text-ink'
          : 'bg-transparent text-ivory'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-4 flex-1">
            <button
              type="button"
              className="md:hidden -ml-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X width={22} height={22} /> : <Menu width={22} height={22} />}
            </button>
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-[0.25em] leading-none"
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-[11px] uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
            <button
              type="button"
              aria-label="Search"
              className="hover:text-gold transition-colors duration-300"
            >
              <Search width={19} height={19} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag width={19} height={19} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-espresso text-[10px] font-medium min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand fade-in">
          <div className="px-5 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
