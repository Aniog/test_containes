import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

import { useStore } from '@/context/StoreContext'

const navigationLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { cartCount, setCartOpen, searchQuery, setSearchQuery } = useStore()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 28)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location.pathname, location.hash])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !hasScrolled && !mobileOpen && !searchOpen

  const shellClasses = useMemo(
    () =>
      isTransparent
        ? 'border-velmora-parchment/15 bg-velmora-ink/20 text-velmora-parchment shadow-soft backdrop-blur-md'
        : 'border-velmora-mist/15 bg-velmora-parchment/95 text-velmora-ink shadow-soft backdrop-blur-xl',
    [isTransparent],
  )

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    navigate('/shop')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:px-10">
      <div className={`rounded-full border transition duration-300 ${shellClasses}`}>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-3 md:px-6">
          <div className="flex items-center gap-3 md:gap-6">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-current/40 md:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link
              to="/"
              className="font-display text-2xl uppercase tracking-[0.42em] sm:text-3xl"
            >
              Velmora
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs font-medium uppercase tracking-[0.28em] transition hover:text-velmora-bronze"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-current/40"
              aria-label="Open search"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-current/40"
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-velmora-bronze px-1 text-[10px] font-semibold text-velmora-parchment">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {searchOpen ? (
          <div className="border-t border-current/10 px-4 pb-4 pt-2 md:px-6">
            <form className="flex flex-col gap-3 md:flex-row" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search earrings, necklaces, huggies..."
                className="h-12 flex-1 rounded-full border border-velmora-mist/25 bg-white/80 px-5 text-sm text-velmora-ink outline-none placeholder:text-velmora-mist focus:border-velmora-bronze"
              />
              <button
                type="submit"
                className="rounded-full bg-velmora-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-velmora-parchment transition hover:bg-velmora-cacao"
              >
                Search
              </button>
            </form>
          </div>
        ) : null}

        {mobileOpen ? (
          <div className="border-t border-current/10 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-xs font-medium uppercase tracking-[0.32em] transition hover:text-velmora-bronze"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Header
