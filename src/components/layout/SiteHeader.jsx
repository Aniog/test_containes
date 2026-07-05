import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'

const navigationItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

function SiteHeader({ onOpenCart, onOpenSearch }) {
  const location = useLocation()
  const { itemCount } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const isTransparent = useMemo(
    () => location.pathname === '/' && !isScrolled && !isMobileMenuOpen,
    [isScrolled, isMobileMenuOpen, location.pathname],
  )

  const headerClasses = isTransparent
    ? 'border-transparent bg-transparent text-white'
    : 'border-velmora-line/80 bg-velmora-pearl/95 text-velmora-espresso shadow-card backdrop-blur-md'

  const linkClasses = ({ isActive }) =>
    [
      'transition-colors duration-300 hover:text-velmora-gold',
      isActive ? 'text-velmora-gold' : '',
    ].join(' ')

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${headerClasses}`}>
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-display text-xl tracking-brand sm:text-2xl" aria-label="Velmora home">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-overline md:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-current/40"
            aria-label="Open search"
            onClick={onOpenSearch}
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-current/40"
            aria-label="Open cart"
            onClick={onOpenCart}
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[11px] font-semibold text-velmora-espresso">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-velmora-espresso text-velmora-mist md:hidden">
          <div className="page-shell flex flex-col gap-5 py-6 text-sm uppercase tracking-overline">
            {navigationItems.map((item) => (
              <NavLink key={item.label} to={item.to} className="transition hover:text-velmora-gold">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
