import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

const linkClassName = ({ isActive }) =>
  `transition duration-300 hover:text-amber-200 ${
    isActive ? 'text-amber-200' : 'text-current'
  }`

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, openCart } = useCart()
  const isTransparent = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          isTransparent
            ? 'bg-transparent text-stone-50'
            : 'border-b border-stone-200 bg-stone-50/95 text-stone-900 shadow-lg backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-current md:hidden ${
              isTransparent ? 'border border-white/20' : 'border border-stone-300'
            }`}
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="font-['Cormorant_Garamond'] text-3xl tracking-[0.42em] text-current"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.28em] md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} className={linkClassName} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-current transition duration-300 hover:border-amber-200 hover:text-amber-200 ${
                isTransparent ? 'border border-white/20' : 'border border-stone-300'
              }`}
              type="button"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full text-current transition duration-300 hover:border-amber-200 hover:text-amber-200 ${
                isTransparent ? 'border border-white/20' : 'border border-stone-300'
              }`}
              type="button"
              aria-label="Open cart"
              onClick={openCart}
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-sm transition duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <aside
          className={`ml-auto flex h-full w-[82%] max-w-sm flex-col bg-stone-950 px-6 py-6 text-stone-50 transition duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <span className="font-['Cormorant_Garamond'] text-2xl tracking-[0.34em]">
              VELMORA
            </span>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-6 text-sm uppercase tracking-[0.28em]">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                className={linkClassName}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  )
}

export default Header
