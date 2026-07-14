import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Navbar() {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const isTransparent = location.pathname === '/' && !isScrolled
  const shellClass = isTransparent
    ? 'bg-transparent text-stone-50'
    : 'border-b border-white/10 bg-stone-950/90 text-stone-50 backdrop-blur-xl'

  return (
    <header className={`sticky top-0 z-30 transition duration-300 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-full border border-white/15 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.45em] text-inherit md:text-3xl"
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.24em] transition ${
                  isActive ? 'text-amber-200' : 'text-inherit/85 hover:text-amber-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/shop"
            className="rounded-full border border-white/15 p-2.5 text-inherit transition hover:bg-white/5"
            aria-label="Search the shop"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-white/15 p-2.5 text-inherit transition hover:bg-white/5"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-white/10 bg-stone-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.24em] ${
                    isActive ? 'text-amber-200' : 'text-stone-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
