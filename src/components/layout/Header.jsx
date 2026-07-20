import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=heirlooms' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const textClass = transparent ? 'text-velmora-ivory' : 'text-velmora-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${
        transparent
          ? 'border-velmora-ivory/20 bg-transparent'
          : 'border-velmora-sand/80 bg-velmora-ivory/95 shadow-soft backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
        <Link to="/" className={`font-serif text-3xl tracking-[0.28em] ${textClass}`}>
          VELMORA
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`text-xs font-semibold uppercase tracking-luxury transition hover:text-velmora-gold ${textClass}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${textClass}`}>
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full p-2 transition hover:bg-velmora-gold/15 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-velmora-sand bg-velmora-ivory px-5 py-6 text-velmora-ink shadow-soft lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="text-sm font-semibold uppercase tracking-luxury text-velmora-ink">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
