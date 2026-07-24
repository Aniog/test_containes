import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navItems = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { itemCount, openCart } = useCart()
  const homeRoute = pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const useTransparentStyle = homeRoute && !isScrolled && !isMenuOpen
  const shellClass = useTransparentStyle
    ? 'border-transparent bg-transparent text-stone-50'
    : 'border-stone-200/70 bg-brand-canvas/95 text-brand-text shadow-card backdrop-blur-xl'

  const linkClass = ({ isActive }) =>
    `transition hover:text-brand-gold ${isActive ? 'text-brand-gold' : ''}`

  return (
    <header className={`sticky top-0 z-30 border-b transition-all duration-500 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex rounded-full border border-current/15 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-3xl tracking-[0.28em] sm:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.24em] lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full border border-current/15 p-2 transition hover:text-brand-gold"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-current/15 p-2 transition hover:text-brand-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-[10px] font-semibold text-brand-ink">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${isMenuOpen ? 'max-h-80 border-t border-current/10' : 'max-h-0'}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 text-sm uppercase tracking-[0.24em] sm:px-6 lg:px-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
