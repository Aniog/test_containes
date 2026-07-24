import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navigationLinks } from '../../data/store'
import { useCart } from '../../context/CartContext'

const SiteHeader = () => {
  const location = useLocation()
  const { cartCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHomeAtTop = location.pathname === '/' && !scrolled && !mobileOpen
  const shellClassName = isHomeAtTop
    ? 'bg-transparent text-stone-50'
    : 'border-b border-stone-200/10 bg-stone-950/92 text-stone-50 backdrop-blur-xl'

  const linkClassName = ({ isActive }) =>
    [
      'text-xs uppercase tracking-[0.28em] transition hover:text-amber-200',
      isActive ? 'text-amber-200' : 'text-stone-200',
    ].join(' ')

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${shellClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <div className="flex items-center gap-4 lg:flex-1">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/15 text-stone-50 md:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link to="/" className="font-display text-3xl tracking-logo text-stone-50">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 md:flex lg:flex-1">
          {navigationLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:flex-1">
          <Link
            to="/shop"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/15 text-stone-50 transition hover:border-amber-200/50 hover:text-amber-200"
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/15 text-stone-50 transition hover:border-amber-200/50 hover:text-amber-200"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount ? (
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-stone-200/10 bg-stone-950/96 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClassName}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default SiteHeader
