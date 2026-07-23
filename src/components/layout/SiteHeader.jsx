import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=all', label: 'Collections' },
  { to: '/#our-story', label: 'About' },
  { to: '/#journal', label: 'Journal' },
]

const SiteHeader = () => {
  const location = useLocation()
  const { cartCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled && !mobileMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${
        isTransparent
          ? 'bg-transparent text-velmora-ivory'
          : 'border-b border-velmora-sand/70 bg-velmora-ivory/95 text-velmora-ink shadow-velmora-soft backdrop-blur-xl'
      }`}
    >
      <div className="page-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="rounded-full border border-current/20 p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>

          <Link to="/" className="font-display text-3xl tracking-[0.35em]">
            VELMORA
          </Link>

          <nav className="hidden items-center justify-center gap-10 text-sm uppercase tracking-[0.28em] lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `transition duration-300 hover:text-velmora-gold ${
                    isActive ? 'text-velmora-gold' : ''
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
              className="rounded-full border border-current/20 p-2 transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
              aria-label="Search"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative rounded-full border border-current/20 p-2 transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-velmora-gold text-[11px] font-semibold text-velmora-ivory">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-current/10 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'max-h-72 bg-velmora-ivory text-velmora-ink' : 'max-h-0'
        }`}
      >
        <div className="page-shell flex flex-col py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="border-b border-velmora-sand/60 py-4 text-sm uppercase tracking-[0.28em] text-velmora-ink last:border-none"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
