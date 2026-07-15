import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useShop } from '@/context/ShopContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, openCart } = useShop()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const baseText = isScrolled ? 'text-espresso' : 'text-ivory'
  const headerSurface = isScrolled
    ? 'border-b border-champagne/70 bg-parchment/95 shadow-card backdrop-blur-xl'
    : 'bg-transparent'

  return (
    <header className={`sticky top-0 z-30 transition-all duration-500 ${headerSurface}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${
            isScrolled
              ? 'border-champagne bg-ivory text-espresso'
              : 'border-ivory/40 bg-ivory/10 text-ivory backdrop-blur'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className={`font-serif text-3xl tracking-[0.4em] ${baseText}`}>
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.28em] transition ${baseText} ${
                  isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'
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
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
              isScrolled
                ? 'border-champagne bg-ivory text-espresso'
                : 'border-ivory/40 bg-ivory/10 text-ivory backdrop-blur'
            }`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition ${
              isScrolled
                ? 'border-champagne bg-ivory text-espresso'
                : 'border-ivory/40 bg-ivory/10 text-ivory backdrop-blur'
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-espresso">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-champagne/40 bg-parchment/95 backdrop-blur transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-champagne/70 py-4 text-sm uppercase tracking-[0.28em] text-espresso last:border-b-0"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
