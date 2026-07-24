import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#categories' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const linkClasses = ({ isActive }) =>
    `text-[0.68rem] font-semibold uppercase tracking-nav transition-colors duration-300 ${
      isActive ? 'text-velmora-champagne' : 'hover:text-velmora-champagne'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ease-velmora ${
        isTransparent
          ? 'border-white/10 bg-transparent text-velmora-pearl'
          : 'border-velmora-sand/80 bg-velmora-pearl/95 text-velmora-ink shadow-sm backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-current/20 bg-transparent text-current transition hover:border-velmora-champagne hover:text-velmora-champagne lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.18em] text-current sm:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center border border-current/20 bg-transparent text-current transition hover:border-velmora-champagne hover:text-velmora-champagne sm:flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center border border-current/20 bg-transparent text-current transition hover:border-velmora-champagne hover:text-velmora-champagne"
            aria-label="Open cart"
            onClick={openCart}
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-velmora-sand bg-velmora-pearl px-4 py-5 text-velmora-ink shadow-velmora lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
