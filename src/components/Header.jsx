import React, { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const isHome = location.pathname === '/'

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
    setIsSearchOpen(false)
  }, [location.pathname])

  const isSolid = !isHome || isScrolled || isMenuOpen || isSearchOpen

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const trimmedQuery = query.trim()
    navigate(trimmedQuery ? `/shop?query=${encodeURIComponent(trimmedQuery)}` : '/shop')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full border px-5 py-4 transition duration-500 ${
          isSolid
            ? 'border-stone-300/70 bg-stone-950/95 text-stone-100 shadow-[0_18px_50px_rgba(12,10,9,0.35)] backdrop-blur'
            : 'border-transparent bg-transparent text-stone-100'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="rounded-full border border-current/20 p-2 text-current"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <Link className="font-serif text-2xl tracking-[0.35em] sm:text-3xl" to="/">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.3em] md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} className="text-stone-200 transition hover:text-amber-200" to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full border border-current/20 p-2 text-current transition hover:text-amber-200"
              onClick={() => setIsSearchOpen((current) => !current)}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              className="relative rounded-full border border-current/20 p-2 text-current transition hover:text-amber-200"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-200 text-[10px] font-semibold text-stone-950">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {isSearchOpen ? (
          <form className="mt-4 flex gap-3" onSubmit={handleSearchSubmit}>
            <input
              className="h-12 flex-1 rounded-full border border-stone-600 bg-stone-900 px-5 text-sm text-stone-100 placeholder:text-stone-400 focus:border-amber-200 focus:outline-none"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search earrings, necklaces, huggies"
              value={query}
            />
            <button
              type="submit"
              className="rounded-full bg-amber-200 px-5 text-sm font-medium text-stone-950 transition hover:bg-stone-100"
            >
              Search
            </button>
          </form>
        ) : null}

        {isMenuOpen ? (
          <div className="mt-4 grid gap-3 border-t border-stone-700 pt-4 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                className="rounded-full border border-stone-700 px-4 py-3 text-sm uppercase tracking-[0.25em] text-stone-100 transition hover:border-amber-200 hover:text-amber-200"
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Header
