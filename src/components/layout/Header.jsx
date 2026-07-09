import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '@/data/storefront'
import { useCart } from '@/hooks/useCart'

const linkClassName = ({ isActive }) =>
  `transition ${isActive ? 'text-velmora-bronze' : 'text-current hover:text-velmora-bronze'}`

export default function Header() {
  const location = useLocation()
  const { itemCount, toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  const isSolid = !isHomePage || isScrolled || isMobileMenuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${
          isSolid
            ? 'border-b border-velmora-sand/60 bg-velmora-cream/95 text-velmora-ink backdrop-blur-lg'
            : 'bg-transparent text-velmora-mist'
        }`}
      >
        <div className="velmora-shell flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            className="inline-flex rounded-full border border-current/20 p-3 md:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <Link to="/" className="font-display text-3xl tracking-[0.5em] sm:text-4xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.32em] md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} className={linkClassName} to={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="rounded-full border border-current/15 p-3 transition hover:bg-current/5"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="relative rounded-full border border-current/15 p-3 transition hover:bg-current/5"
              onClick={() => toggleCart(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-bronze px-1 text-[10px] font-semibold text-velmora-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-current/10 transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <nav className="velmora-shell flex flex-col gap-5 py-6 text-xs uppercase tracking-[0.32em]">
            {navLinks.map((link) => (
              <NavLink key={link.label} className={linkClassName} to={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
