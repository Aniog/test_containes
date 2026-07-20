import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { getCartQuantity } from '@/lib/cart.js'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = ({ cartItems, onCartOpen }) => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const quantity = getCartQuantity(cartItems)
  const isHomeTop = location.pathname === '/' && !isScrolled && !isMenuOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = isHomeTop
    ? 'bg-transparent text-velmora-espresso border-velmora-espresso/15'
    : 'bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl border-velmora-stone/70'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${headerClasses}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-current/25 text-current transition hover:bg-current/10 lg:hidden"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-current">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-bold uppercase tracking-[0.24em] text-current/85 transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/25 text-current transition hover:bg-current/10 sm:flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current/25 text-current transition hover:bg-current/10"
            aria-label="Open cart"
            onClick={onCartOpen}
          >
            <ShoppingBag className="h-5 w-5" />
            {quantity > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {quantity}
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 transition lg:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className={`h-full w-[86%] max-w-sm bg-velmora-ivory p-6 text-velmora-espresso shadow-editorial transition duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <span className="font-serif text-3xl font-semibold tracking-[0.18em]">VELMORA</span>
            <button
              type="button"
              className="rounded-full border border-velmora-stone p-2 text-velmora-espresso"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-velmora-stone/70 pb-4 font-serif text-3xl text-velmora-espresso"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-12 text-sm leading-7 text-velmora-taupe">
            Demi-fine gold jewelry for everyday rituals, gifting, and softly polished evenings.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
