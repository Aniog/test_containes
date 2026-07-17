import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const mobileMenuId = 'velmora-mobile-menu'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname, location.search, location.hash])

  const navTone =
    location.pathname === '/' && !isScrolled
      ? 'border-transparent bg-transparent text-pearl'
      : 'border-hairline-light bg-espresso/95 text-pearl shadow-luxe backdrop-blur'

  return (
    <header
      data-velmora-navbar="true"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${navTone}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light text-pearl transition hover:border-gold hover:text-gold md:hidden"
          onClick={() => setIsMobileOpen((value) => !value)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls={mobileMenuId}
        >
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        <Link
          to="/"
          className="font-serif text-[1.7rem] font-semibold tracking-[0.24em] text-pearl sm:text-[2rem] sm:tracking-[0.32em]"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs uppercase tracking-[0.24em] text-pearl/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light text-pearl transition hover:border-gold hover:text-gold"
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light text-pearl transition hover:border-gold hover:text-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-umber">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div id={mobileMenuId} className="border-t border-hairline-light bg-espresso px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-left text-sm uppercase tracking-[0.24em] text-pearl/85 transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
