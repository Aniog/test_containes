import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=sets' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const linkClass = transparent
    ? 'velmora-nav-shadow text-velmora-porcelain hover:text-velmora-champagne'
    : 'text-velmora-ink hover:text-velmora-deepgold'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-gradient-to-b from-velmora-espresso/45 to-transparent'
          : 'border-b border-velmora-champagne/70 bg-velmora-porcelain/95 shadow-sm backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className={`rounded-full p-2 transition md:hidden ${linkClass}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.18em] transition ${
            transparent ? 'velmora-nav-shadow text-velmora-porcelain' : 'text-velmora-espresso'
          }`}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`text-xs font-semibold uppercase tracking-luxury transition ${linkClass}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className={`rounded-full p-2 transition ${linkClass}`} aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={`relative rounded-full p-2 transition ${linkClass}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-velmora-champagne bg-velmora-porcelain px-4 py-6 text-velmora-ink shadow-velvet md:hidden">
          <nav className="grid gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className="text-sm font-semibold uppercase tracking-luxury text-velmora-espresso">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
