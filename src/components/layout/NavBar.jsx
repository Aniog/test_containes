import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { useScrollPosition } from '@/hooks/useScrollPosition.js'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isScrolled = useScrollPosition(24)
  const { itemCount, setIsCartOpen } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled

  const shellClass = isTransparent
    ? 'border-white/10 bg-transparent text-stone-50'
    : 'border-stone-200/70 bg-stone-50/95 text-stone-900 shadow-sm backdrop-blur'

  const linkClass = ({ isActive }) =>
    `transition ${isTransparent ? 'hover:text-amber-200' : 'hover:text-stone-600'} ${isActive ? (isTransparent ? 'text-amber-200' : 'text-stone-950') : ''}`

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="rounded-full border border-current/15 p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        <Link to="/" className="font-serif text-3xl tracking-[0.4em] sm:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.24em] md:flex">
          {navLinks.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="rounded-full border border-current/15 p-2 transition hover:bg-white/10"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full border border-current/15 p-2 transition hover:bg-white/10"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[0.6rem] font-semibold text-stone-950">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          className={`border-t px-5 py-5 md:hidden ${isTransparent ? 'border-white/10 bg-stone-950/95' : 'border-stone-200 bg-stone-50'}`}
        >
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.24em]">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
