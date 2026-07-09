import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const SiteHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !mobileOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isTransparent
          ? 'bg-transparent text-velmora-ivory'
          : 'border-b border-velmora-line/70 bg-velmora-pearl/95 text-velmora-ink shadow-soft backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 lg:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-display text-3xl tracking-[0.28em] sm:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.28em] transition ${
                  isActive ? 'text-velmora-gold' : 'hover:text-velmora-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={() => navigate('/shop#browse')}
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1.5 py-0.5 text-[10px] font-semibold text-velmora-noir">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-current/10 bg-inherit transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-sm uppercase tracking-[0.28em]"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
