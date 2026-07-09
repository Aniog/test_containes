import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const { count, toggleCart } = useCart()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'
  const darkBg = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-400 ${
          darkBg
            ? 'bg-transparent text-velmora-cream'
            : 'bg-velmora-cream/95 backdrop-blur text-velmora-espresso border-b border-velmora-hairline'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 sm:h-20 items-center justify-between">
            {/* Mobile menu */}
            <button
              type="button"
              className="sm:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center links desktop */}
            <ul className="hidden sm:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs uppercase tracking-widest font-medium hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl sm:text-3xl tracking-widest font-semibold"
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                type="button"
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="relative p-2 hover:opacity-70 transition-opacity"
                onClick={toggleCart}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-espresso">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-velmora-espresso/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-velmora-cream p-6 shadow-xl">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-widest">VELMORA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl text-velmora-espresso"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
