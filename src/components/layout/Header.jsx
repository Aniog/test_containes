import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const { cartCount, openCart } = useCart()
  const location = useLocation()
  const [isScrolled, setScrolled] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const darkHeader = isScrolled || isMenuOpen || location.pathname !== '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        darkHeader
          ? 'border-b border-velmora-sand/70 bg-velmora-porcelain/95 text-velmora-espresso shadow-sm backdrop-blur-xl'
          : 'border-b border-white/10 bg-transparent text-velmora-porcelain'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          className="rounded-full p-2 text-current transition hover:bg-current/10 lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.24em] lg:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-xs font-semibold uppercase tracking-[0.22em] opacity-90 transition hover:text-velmora-gold hover:opacity-100"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="rounded-full p-2 text-current transition hover:bg-current/10"
            aria-label="Search products"
          >
            <Search size={20} />
          </Link>
          <button
            type="button"
            className="relative rounded-full p-2 text-current transition hover:bg-current/10"
            aria-label={`Open cart with ${cartCount} items`}
            onClick={openCart}
          >
            <ShoppingBag size={21} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-velmora-sand/70 bg-velmora-porcelain px-5 py-5 text-velmora-espresso lg:hidden">
          <div className="grid gap-4">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="py-2 text-sm font-semibold uppercase tracking-[0.22em]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
