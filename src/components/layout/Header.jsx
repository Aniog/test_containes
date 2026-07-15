import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function isCurrentLink(itemPath, location) {
  if (itemPath.includes('#')) {
    return `${location.pathname}${location.hash}` === itemPath
  }

  return location.pathname === itemPath
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const isHomeRoute = location.pathname === '/'
  const shellClass = isScrolled || mobileOpen || !isHomeRoute
    ? 'border-b border-velmora-line/40 bg-velmora-ivory/92 text-velmora-ink shadow-[0_18px_40px_rgba(31,23,21,0.08)] backdrop-blur'
    : 'bg-transparent text-velmora-ivory'

  const linkClass = ({ isActive }) =>
    `transition ${isActive ? 'text-velmora-gold' : ''}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex rounded-full border border-current/20 p-2 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="font-display text-3xl tracking-[0.28em]">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 text-sm uppercase tracking-[0.28em] lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:gap-3">
          <button
            type="button"
            className="rounded-full border border-current/20 p-2 transition hover:border-current/40"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-current/20 p-2 transition hover:border-current/40"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-medium text-velmora-ivory">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-velmora-line/50 bg-velmora-ivory px-5 py-5 text-velmora-ink lg:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.28em]">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={linkClass}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
