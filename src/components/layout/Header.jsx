import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const linkClass = transparent
    ? 'text-velmora-cream hover:text-velmora-stone'
    : 'text-velmora-espresso hover:text-velmora-goldDark'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
        transparent
          ? 'border-transparent bg-transparent'
          : 'border-b border-velmora-stone bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 transition ${linkClass}`}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <Link
          to="/"
          className={`font-serif text-3xl font-semibold tracking-[0.18em] transition ${linkClass}`}
          aria-label="Velmora home"
        >
          VELMORA
        </Link>

        <div className="hidden justify-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`text-xs font-bold uppercase tracking-[0.28em] transition ${linkClass}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className={`p-2 transition ${linkClass}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={`relative p-2 transition ${linkClass}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-cream">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/55 backdrop-blur-sm lg:hidden">
          <div className="min-h-full w-[86%] max-w-sm bg-velmora-ivory p-6 text-velmora-espresso shadow-soft">
            <div className="flex items-center justify-between border-b border-velmora-stone pb-5">
              <Link to="/" className="font-serif text-3xl tracking-[0.18em]">
                VELMORA
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-velmora-espresso"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid gap-5 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="text-sm font-bold uppercase tracking-[0.28em] text-velmora-espresso"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
