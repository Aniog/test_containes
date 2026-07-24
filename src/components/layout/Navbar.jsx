import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { navLinks } from '@/data/siteContent'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, setIsCartOpen } = useCart()
  const isTransparentHomeNav = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
  }, [location.pathname, location.hash])

  const navSurfaceClass = isTransparentHomeNav
    ? 'bg-gradient-to-b from-black/35 via-black/10 to-transparent'
    : 'bg-velmora-ivory/95 shadow-velmora backdrop-blur-xl'

  const navTextClass = isTransparentHomeNav ? 'text-velmora-ivory' : 'text-velmora-ink'
  const iconButtonClass = isTransparentHomeNav
    ? 'border-white/20 bg-black/10 text-white hover:bg-black/20'
    : 'border-velmora-line bg-velmora-pearl text-velmora-ink hover:bg-white'

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      navigate('/shop')
      return
    }

    navigate(`/shop?search=${encodeURIComponent(normalizedQuery)}`)
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition duration-300 ${navSurfaceClass}`}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8 ${navTextClass}`}>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
              location.pathname === '/' && !isScrolled
                ? 'border-white/20 bg-black/10 text-white'
                : 'border-velmora-line bg-velmora-pearl text-velmora-ink'
            }`}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            to="/"
            className={`font-display text-3xl tracking-[0.32em] ${
              location.pathname === '/' && !isScrolled ? 'text-white' : 'text-velmora-ink'
            }`}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith('#')
              const commonClass = ({ isActive }) =>
                `text-xs uppercase tracking-[0.28em] transition ${
                  location.pathname === '/' && !isScrolled
                    ? 'text-white/88 hover:text-white'
                    : 'text-velmora-ink hover:text-velmora-bronze'
                } ${isActive ? 'opacity-100' : 'opacity-80'}`

              if (isHashLink) {
                return (
                  <Link
                    key={link.label}
                    to={{ pathname: '/', hash: link.href }}
                    className={commonClass({ isActive: location.pathname === '/' && location.hash === link.href })}
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <NavLink key={link.label} to={link.href} className={commonClass}>
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen((current) => !current)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                location.pathname === '/' && !isScrolled
                  ? 'border-white/20 bg-black/10 text-white hover:bg-black/20'
                  : 'border-velmora-line bg-velmora-pearl text-velmora-ink hover:bg-white'
              }`}
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                location.pathname === '/' && !isScrolled
                  ? 'border-white/20 bg-black/10 text-white hover:bg-black/20'
                  : 'border-velmora-line bg-velmora-pearl text-velmora-ink hover:bg-white'
              }`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {isSearchOpen ? (
          <div className="border-t border-velmora-line bg-velmora-ivory/95 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <form onSubmit={handleSearchSubmit} className="mx-auto flex max-w-3xl gap-3">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search earrings, necklaces, huggies"
                className="h-12 flex-1 rounded-full border border-velmora-line bg-white px-5 text-sm text-velmora-ink placeholder:text-velmora-mist focus:border-velmora-bronze focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-velmora-ink px-6 text-xs font-medium uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-bronze"
              >
                Search
              </button>
            </form>
          </div>
        ) : null}

        {isMenuOpen ? (
          <div className="border-t border-velmora-line bg-velmora-ivory px-4 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const destination = link.href.startsWith('#')
                  ? { pathname: '/', hash: link.href }
                  : link.href

                return (
                  <Link
                    key={link.label}
                    to={destination}
                    className="text-sm uppercase tracking-[0.28em] text-velmora-ink"
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  )
}

export default Navbar
