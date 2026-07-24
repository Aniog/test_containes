import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import SearchOverlay from '@/components/SearchOverlay'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop?category=huggies', label: 'Huggies' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileOpen || searchOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [mobileOpen, searchOpen])

  const solid = scrolled || mobileOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid
            ? 'border-b border-line bg-cream/95 shadow-[0_8px_30px_-18px_rgba(34,27,20,0.35)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div
          className={`bg-ink text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/90 transition-all duration-500 ${
            solid ? 'max-h-0 overflow-hidden py-0 opacity-0' : 'max-h-10 py-2.5 opacity-100'
          }`}
        >
          Complimentary worldwide shipping on all orders
        </div>

        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
          <div className="flex flex-1 items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold-deep md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <Link
            to="/"
            className="font-serif text-2xl font-medium uppercase tracking-[0.32em] text-ink transition-colors hover:text-gold-deep md:text-[26px]"
            aria-label="Velmora home"
          >
            Velmora
          </Link>

          <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.slice(3).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold-deep"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link
              to="/shop"
              className="hidden h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold-deep sm:inline-flex"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold-deep"
              aria-label={`Open cart, ${count} items`}
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-deep px-1 text-[9px] font-bold text-cream">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute left-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <span className="font-serif text-xl uppercase tracking-[0.3em] text-ink">Velmora</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-ink hover:text-gold-deep"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="border-b border-line py-4 font-serif text-2xl text-ink transition-colors hover:text-gold-deep"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-auto px-6 pb-10 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            Crafted to be treasured
          </p>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
