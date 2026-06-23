import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useScrollState } from '@/hooks/useScrollState'
import Container from '@/components/Container'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
]

const Navbar = () => {
  const isScrolled = useScrollState(36)
  const location = useLocation()
  const { cartCount, setIsCartOpen } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navClassName = isHome && !isScrolled
    ? 'bg-transparent text-brand-ivory'
    : 'border-b border-brand-line bg-brand-ivory/95 text-brand-espresso shadow-[0_12px_40px_rgba(44,33,28,0.08)] backdrop-blur-xl'

  const linkClassName = ({ isActive }) =>
    `transition hover:text-brand-bronze ${isActive ? 'text-brand-bronze' : ''}`

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${navClassName}`}>
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-full border border-current/20 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl tracking-[0.28em]">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.26em] lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <button
            type="button"
            className="rounded-full border border-current/20 p-2 transition hover:border-brand-bronze hover:text-brand-bronze"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full border border-current/20 p-2 transition hover:border-brand-bronze hover:text-brand-bronze"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-bronze px-1 text-[10px] font-semibold text-brand-umber">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden border-t border-current/10 bg-inherit lg:hidden ${
          isMenuOpen ? 'max-h-80' : 'max-h-0'
        } transition-all duration-300`}
      >
        <Container className="flex flex-col gap-4 py-4 text-sm uppercase tracking-[0.22em]">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClassName}>
              {link.label}
            </NavLink>
          ))}
        </Container>
      </div>
    </header>
  )
}

export default Navbar
