import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
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

  // Transparent over the homepage hero only; solid elsewhere.
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-espresso/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,162,75,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-4">
          <button
            className="text-ivory md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.3em] text-ivory md:text-3xl"
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive
                    ? 'text-gold'
                    : 'text-ivory-muted hover:text-ivory'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-5">
          <button
            className="text-ivory transition-colors hover:text-gold"
            aria-label="Search"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            className="relative text-ivory transition-colors hover:text-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-espresso">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-espresso transition-[max-height] duration-500 md:hidden ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `border-b border-gold/10 py-3 text-sm uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-gold' : 'text-ivory-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
