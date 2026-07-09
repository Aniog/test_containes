import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import Logo from '@/components/shared/Logo.jsx'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = ({ onOpenSearch }) => {
  const location = useLocation()
  const { totalItems, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash, location.search])

  const isHomeTop = useMemo(
    () => location.pathname === '/' && !scrolled && !mobileMenuOpen,
    [location.pathname, scrolled, mobileMenuOpen],
  )

  const navClassName = isHomeTop
    ? 'border-white/10 bg-transparent text-porcelain'
    : 'border-bone/80 bg-porcelain/95 text-velvet shadow-soft backdrop-blur-xl'

  const linkClassName = ({ isActive }) =>
    `transition-colors duration-300 hover:text-champagne ${
      isActive ? 'text-champagne' : 'text-inherit'
    }`

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${navClassName}`}>
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 hover:text-champagne"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 hover:text-champagne"
            onClick={onOpenSearch}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-start lg:flex">
          <Logo />
        </div>

        <nav className="hidden items-center justify-center gap-10 text-sm uppercase tracking-[0.24em] lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} className={linkClassName} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-center lg:hidden">
          <Logo />
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 hover:text-champagne lg:inline-flex"
            onClick={onOpenSearch}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 hover:text-champagne"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[11px] font-semibold text-ivory">
                {totalItems}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-current/10 bg-inherit lg:hidden">
          <div className="page-shell flex flex-col gap-5 py-6 text-sm uppercase tracking-[0.24em]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className="transition-colors duration-300 hover:text-champagne"
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
