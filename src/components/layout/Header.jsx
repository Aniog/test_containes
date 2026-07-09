import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigationItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Necklaces' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const isHomePage = location.pathname === '/'
  const isTransparent = isHomePage && !isScrolled

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true)
      return undefined
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  const headerClassName = isTransparent
    ? 'bg-transparent'
    : 'border-b border-stone-200/80 bg-stone-50/95 shadow-lg shadow-stone-900/5 backdrop-blur-xl'
  const brandClassName = isTransparent ? 'text-stone-50' : 'text-stone-950'
  const navClassName = isTransparent
    ? 'text-stone-100 hover:text-amber-300'
    : 'text-stone-700 hover:text-amber-600'
  const iconClassName = isTransparent
    ? 'border-white/15 bg-white/5 text-stone-100 hover:border-amber-400 hover:text-amber-300'
    : 'border-stone-300 bg-white/80 text-stone-950 hover:border-amber-500 hover:text-amber-700'
  const activeClassName = isTransparent ? 'text-amber-300' : 'text-amber-700'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${headerClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`font-display text-3xl tracking-[0.42em] sm:text-[2rem] ${brandClassName}`}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.28em] transition ${navClassName} ${isActive ? activeClassName : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Search"
            className={`rounded-full border p-3 transition ${iconClassName}`}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className={`relative rounded-full border p-3 transition ${iconClassName}`}
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-semibold text-stone-950">
              {itemCount}
            </span>
          </button>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={`rounded-full border p-3 transition md:hidden ${iconClassName}`}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-stone-200/70 bg-stone-50/95 px-4 py-4 shadow-lg shadow-stone-900/5 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full border border-stone-200 px-4 py-3 text-xs uppercase tracking-[0.28em] text-stone-800 transition hover:border-amber-500 hover:text-amber-700 ${isActive ? 'border-amber-500 bg-amber-50 text-amber-700' : 'bg-white/80'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
