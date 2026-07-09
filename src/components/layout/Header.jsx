import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import Logo from '@/components/layout/Logo.jsx'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.hash, location.pathname, location.search])

  const isHomeOverlay = location.pathname === '/' && !location.hash && !isScrolled && !isMobileOpen

  const shellClassName = isHomeOverlay
    ? 'bg-gradient-to-b from-espresso/75 via-espresso/35 to-transparent text-ivory'
    : 'border-b border-champagne/20 bg-ivory/95 text-espresso shadow-[0_8px_30px_rgba(33,25,20,0.08)] backdrop-blur-xl'

  const iconButtonClassName = isHomeOverlay
    ? 'rounded-full border border-ivory/20 bg-ivory/5 p-2 text-ivory transition hover:border-champagne hover:bg-espresso/35 hover:text-champagne backdrop-blur-sm'
    : 'rounded-full border border-current/15 p-2 transition hover:text-gold'

  const navLinkClassName = ({ isActive }) =>
    `text-[11px] uppercase tracking-[0.32em] transition ${
      isHomeOverlay
        ? isActive
          ? 'text-champagne'
          : 'text-ivory hover:text-champagne'
        : isActive
          ? 'text-gold'
          : 'hover:text-gold'
    }`

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${shellClassName}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 lg:w-1/4">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className={`inline-flex lg:hidden ${iconButtonClassName}`}
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" aria-label="Velmora home">
              <Logo />
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex lg:flex-1">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className={navLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 lg:w-1/4">
            <button
              type="button"
              className={iconButtonClassName}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={`relative ${iconButtonClassName}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ivory">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 transition lg:hidden ${isMobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileOpen(false)}
          className={`absolute inset-0 bg-espresso/45 backdrop-blur-sm transition ${isMobileOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-ivory px-6 py-6 text-espresso transition duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <Logo className="text-espresso" />
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-full border border-champagne/35 p-2 text-espresso"
              aria-label="Close navigation panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMobileOpen(false)}
                className="font-serif text-3xl text-espresso transition hover:text-gold"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto border-t border-champagne/35 pt-6 text-sm leading-7 text-ink-soft">
            Premium demi-fine jewelry for gifting and self-purchase, designed to move from everyday ritual to occasion dressing.
          </div>
        </aside>
      </div>
    </>
  )
}

export default Header
