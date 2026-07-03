import { Search, ShoppingBag } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../store/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function SiteHeader() {
  const location = useLocation()
  const { itemCount, setIsCartOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const transparentHero = location.pathname === '/' && !scrolled
  const headerClassName = transparentHero
    ? 'bg-transparent text-shell'
    : 'border-b border-parchment/80 bg-shell/95 text-ink backdrop-blur'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${headerClassName}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="font-serif text-3xl tracking-[0.34em] md:text-4xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-xs uppercase tracking-[0.22em] transition hover:text-champagne"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition hover:text-champagne"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition hover:text-champagne"
              aria-label="Cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-obsidian">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        <nav className="flex gap-5 overflow-x-auto pb-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="shrink-0 text-[11px] uppercase tracking-[0.22em] transition hover:text-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
