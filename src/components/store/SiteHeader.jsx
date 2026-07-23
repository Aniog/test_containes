import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '@/data/storefront.js'
import { useCart } from '@/context/CartContext.jsx'

const SiteHeader = () => {
  const { pathname } = useLocation()
  const { itemCount, setCartOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isOverlayMode = pathname === '/' && !isScrolled
  const headerClassName = isOverlayMode
    ? 'border-transparent bg-transparent text-velmora-ivory'
    : 'border-velmora-mist/25 bg-velmora-porcelain/95 text-velmora-noir shadow-soft backdrop-blur-md'

  const linkClassName = ({ isActive }) => {
    const base = isOverlayMode ? 'nav-link' : 'nav-link-solid'
    return `${base} ${isActive ? (isOverlayMode ? 'text-velmora-champagne' : 'text-velmora-noir') : ''}`
  }

  const renderNavHref = (href) => {
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`
    }

    return href
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-luxe ${headerClassName}`}>
      <div className="section-wrap flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-2xl tracking-[0.35em] sm:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} className={linkClassName} to={renderNavHref(link.href)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 hover:border-current/35"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 hover:border-current/35"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1.5 text-[10px] font-semibold text-velmora-noir">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className={`border-t px-5 py-5 lg:hidden ${isOverlayMode ? 'border-velmora-ivory/15 bg-velmora-noir/95 text-velmora-ivory' : 'border-velmora-mist/25 bg-velmora-porcelain text-velmora-noir'}`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) => `text-sm uppercase tracking-brand ${isActive ? 'text-velmora-champagne' : ''}`}
                to={renderNavHref(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
