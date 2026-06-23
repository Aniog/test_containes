import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useStore } from './StoreProvider'

const desktopLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const NavBar = () => {
  const { itemCount, openCart } = useStore()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHomeTop = useMemo(
    () => location.pathname === '/' && !isScrolled,
    [location.pathname, isScrolled],
  )

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-500 ease-luxe ${
        isHomeTop
          ? 'border-transparent bg-transparent text-pearl'
          : 'border-line/70 bg-pearl/95 text-ink shadow-[0_10px_30px_rgba(29,25,22,0.08)] backdrop-blur-md'
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between gap-4 py-4 sm:py-5">
          <Link
            to="/"
            className={`font-serif text-2xl uppercase tracking-[0.34em] transition-colors duration-300 ${
              isHomeTop ? 'text-pearl' : 'text-ink'
            }`}
          >
            Velmora
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {desktopLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.24em] transition-colors duration-300 ${
                    isHomeTop ? 'text-pearl/85 hover:text-pearl' : 'text-muted hover:text-ink'
                  } ${isActive ? (isHomeTop ? 'text-pearl' : 'text-ink') : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/shop"
              aria-label="Search the catalog"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                isHomeTop
                  ? 'border-pearl/30 bg-pearl/10 text-pearl hover:bg-pearl/20'
                  : 'border-line bg-pearl text-ink hover:border-gold hover:text-gold'
              }`}
            >
              <Search className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                isHomeTop
                  ? 'border-pearl/30 bg-pearl/10 text-pearl hover:bg-pearl/20'
                  : 'border-line bg-pearl text-ink hover:border-gold hover:text-gold'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold px-1 text-[0.65rem] font-semibold text-pearl">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 overflow-x-auto pb-4 lg:hidden">
          {desktopLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={`whitespace-nowrap text-[0.7rem] uppercase tracking-[0.24em] ${
                isHomeTop ? 'text-pearl/85' : 'text-muted'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar
