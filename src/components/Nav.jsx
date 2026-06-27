import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const solid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream/95 backdrop-blur-md border-b border-line text-ink py-3'
          : 'bg-transparent text-cream py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Left: mobile menu + logo on mobile */}
        <div className="flex items-center gap-4 flex-1">
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-[1.7rem] tracking-[0.25em] font-medium hidden md:block"
          >
            VELMORA
          </Link>
        </div>

        {/* Center: logo on mobile, links on desktop */}
        <Link
          to="/"
          className="md:hidden font-serif text-2xl tracking-[0.25em] font-medium"
        >
          VELMORA
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[0.7rem] uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            type="button"
            aria-label="Search"
            className="hover:text-gold transition-colors"
          >
            <Search className="w-[1.15rem] h-[1.15rem]" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative hover:text-gold transition-colors"
          >
            <ShoppingBag className="w-[1.15rem] h-[1.15rem]" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-cream text-[0.6rem] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-cream animate-fade">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.2em] font-medium text-ink hover:text-gold"
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
