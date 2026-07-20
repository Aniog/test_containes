import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-velmora-bg/95 text-velmora-text backdrop-blur-sm border-b border-velmora-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.18em] uppercase font-semibold"
          >
            Velmora
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-xs uppercase tracking-[0.15em] font-medium hover:text-velmora-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              className="p-2 hover:text-velmora-accent transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="relative p-2 hover:text-velmora-accent transition-colors"
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-velmora-accent text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-velmora-bg border-b border-velmora-border px-4 pb-6 pt-2 text-velmora-text">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm uppercase tracking-[0.15em] font-medium py-2 border-b border-velmora-border/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
