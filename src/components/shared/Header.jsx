import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/' },
  { label: 'Journal', to: '/' },
]

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const useDarkHeader = isHome && !isScrolled

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-all duration-300 ${
        useDarkHeader
          ? 'border-transparent bg-transparent text-stone-50'
          : 'border-stone-300/80 bg-stone-50/98 text-stone-950 shadow-[0_12px_30px_rgba(28,24,19,0.08)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-full border p-2 lg:hidden ${
            useDarkHeader ? 'border-stone-50/30 text-stone-50' : 'border-stone-400 text-stone-950'
          }`}
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.38em] md:text-3xl ${
            useDarkHeader ? 'text-stone-50' : 'text-stone-950'
          }`}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.28em] transition-colors ${
                  useDarkHeader ? 'text-stone-200 hover:text-stone-50' : 'text-stone-800 hover:text-stone-950'
                } ${isActive ? 'opacity-100' : 'opacity-90'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className={`rounded-full border p-2.5 transition-colors ${
              useDarkHeader
                ? 'border-stone-50/30 text-stone-50 hover:border-stone-50/60'
                : 'border-stone-400 text-stone-900 hover:border-stone-600'
            }`}
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className={`relative rounded-full border p-2.5 transition-colors ${
              useDarkHeader
                ? 'border-stone-50/30 text-stone-50 hover:border-stone-50/60'
                : 'border-stone-400 text-stone-900 hover:border-stone-600'
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          mobileOpen
            ? useDarkHeader
              ? 'max-h-64 border-stone-50/10 bg-stone-950/90 backdrop-blur-xl'
              : 'max-h-64 border-stone-300/70 bg-stone-50/98'
            : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`border-b py-4 text-sm uppercase tracking-[0.28em] last:border-b-0 ${
                useDarkHeader
                  ? 'border-stone-50/10 text-stone-200'
                  : 'border-stone-300 text-stone-900'
              }`}
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
