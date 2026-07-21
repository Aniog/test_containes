import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '@/data/products'
import { useCart } from '@/context/CartContext'

const linkClassName = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-velmora-gold' : 'text-current hover:text-velmora-gold'}`

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHomePage = location.pathname === '/'
  const isSolid = !isHomePage || isScrolled || isMenuOpen

  const shellClassName = isSolid
    ? 'border-b border-velmora-stone/15 bg-velmora-ivory/95 text-velmora-ink shadow-soft backdrop-blur-md'
    : 'bg-transparent text-velmora-ivory'
  const foregroundClassName = isSolid ? 'text-velmora-ink' : 'text-velmora-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${shellClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link to="/" className={`font-serif text-2xl tracking-[0.32em] md:text-3xl ${foregroundClassName}`}>
          VELMORA
        </Link>

        <nav className={`hidden items-center gap-8 text-sm uppercase tracking-[0.24em] md:flex ${foregroundClassName}`}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`hidden items-center gap-4 md:flex ${foregroundClassName}`}>
          <button type="button" className="transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative transition hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
              {itemCount}
            </span>
          </button>
        </div>

        <div className={`flex items-center gap-3 md:hidden ${foregroundClassName}`}>
          <button type="button" className="transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative transition hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
              {itemCount}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-velmora-stone/10 bg-velmora-ivory px-4 py-4 text-velmora-ink md:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.24em]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClassName}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
