import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useStore } from '../../context/StoreContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export function Navbar() {
  const location = useLocation()
  const { cartCount, setIsCartOpen, searchQuery, setSearchQuery } = useStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const solidNav = isScrolled || location.pathname !== '/'
  const navSurface = solidNav
    ? 'border-b border-velmora-line bg-velmora-ivory/95 shadow-[0_10px_30px_rgba(38,27,23,0.06)] backdrop-blur-xl'
    : 'bg-transparent'
  const navText = solidNav ? 'text-velmora-espresso' : 'text-velmora-ivory'
  const navSubtle = solidNav ? 'text-velmora-taupe' : 'text-velmora-ivory/70'
  const inputPlaceholderTone = solidNav
    ? 'placeholder:text-velmora-taupe'
    : 'placeholder:text-velmora-ivory/70'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${navSurface}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-4 lg:gap-8">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`inline-flex rounded-full border px-3 py-2 lg:hidden ${
              solidNav
                ? 'border-velmora-line bg-white text-velmora-espresso'
                : 'border-white/30 bg-white/10 text-velmora-ivory backdrop-blur'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link to="/" className={`font-display text-3xl tracking-[0.3em] ${navText}`}>
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const isHashLink = item.to.includes('#')
            return isHashLink ? (
              <Link
                key={item.label}
                to={item.to}
                className={`text-xs uppercase tracking-[0.32em] transition hover:text-velmora-gold ${navText}`}
              >
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.32em] transition hover:text-velmora-gold ${
                    isActive ? 'text-velmora-gold' : navText
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label
            className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
              solidNav ? 'border-velmora-line bg-white' : 'border-white/20 bg-white/10 backdrop-blur'
            }`}
          >
            <Search className={`h-4 w-4 ${navSubtle}`} />
            <input
              aria-label="Search styles"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search styles"
              className={`w-28 bg-transparent text-sm outline-none ${inputPlaceholderTone} ${navText}`}
            />
          </label>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className={`relative inline-flex rounded-full border p-3 transition ${
              solidNav
                ? 'border-velmora-line bg-white text-velmora-espresso hover:border-velmora-espresso'
                : 'border-white/20 bg-white/10 text-velmora-ivory backdrop-blur hover:bg-white/20'
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-espresso">
              {cartCount}
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className={`relative inline-flex rounded-full border p-3 transition md:hidden ${
            solidNav
              ? 'border-velmora-line bg-white text-velmora-espresso'
              : 'border-white/20 bg-white/10 text-velmora-ivory backdrop-blur'
          }`}
          aria-label="Open cart"
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-espresso">
            {cartCount}
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        } ${solidNav ? 'bg-velmora-ivory' : 'bg-velmora-espresso/90 backdrop-blur-xl'}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-6">
          <label
            className={`flex items-center gap-2 rounded-full border px-4 py-3 ${
              solidNav ? 'border-velmora-line bg-white' : 'border-white/20 bg-white/10'
            }`}
          >
            <Search className={`h-4 w-4 ${navSubtle}`} />
            <input
              aria-label="Search styles"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search styles"
              className={`w-full bg-transparent text-sm outline-none ${inputPlaceholderTone} ${navText}`}
            />
          </label>
          <div className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.to.includes('#') ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-xs uppercase tracking-[0.32em] ${navText}`}
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={`text-xs uppercase tracking-[0.32em] ${navText}`}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
