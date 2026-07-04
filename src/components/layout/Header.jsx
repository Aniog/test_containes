import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { count, setIsCartOpen } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const transparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        transparent
          ? 'border-velmora-cream/15 bg-transparent text-velmora-cream'
          : 'border-velmora-espresso/10 bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-5 py-4 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="justify-self-start rounded-full border border-current/20 p-2 transition hover:border-velmora-gold hover:text-velmora-gold md:hidden"
          aria-label="Open navigation menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="justify-self-center font-serif text-2xl font-semibold tracking-[0.24em] md:justify-self-start">
          VELMORA
        </Link>

        <nav className="hidden justify-self-center md:block" aria-label="Primary navigation">
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.24em]">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to} className="transition hover:text-velmora-gold">
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="rounded-full p-2 transition hover:text-velmora-gold"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full p-2 transition hover:text-velmora-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-cream">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-80' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="grid gap-1 px-5 py-5 text-sm font-semibold uppercase tracking-[0.22em]">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="py-3 transition hover:text-velmora-gold">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
