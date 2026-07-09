import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '@/data/storefront'
import { useCart } from '@/context/CartContext.jsx'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen
  const navClasses = isTransparent
    ? 'border-transparent bg-transparent text-cream'
    : 'border-border/80 bg-canvas/95 text-ink shadow-card backdrop-blur'

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className={`pointer-events-auto mx-auto max-w-7xl rounded-full border transition-all duration-300 ${navClasses}`}>
        <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-current transition hover:bg-current/10 lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <Link
              className="font-display text-xl tracking-brand sm:text-2xl"
              to="/"
            >
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-micro transition ${
                    isActive ? 'text-accent' : 'text-current/85 hover:text-current'
                  }`
                }
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Search products"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-current transition hover:bg-current/10"
              onClick={() => navigate('/shop')}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Open cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-current transition hover:bg-current/10"
              onClick={openCart}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold text-cream">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-current/10 px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-micro ${isActive ? 'text-accent' : 'text-current/80'}`
                  }
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Header
