import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navigationItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const linkClassName = ({ isActive }) =>
  `transition ${isActive ? 'text-ivory md:text-ink' : 'text-ivory/80 md:text-ink/70 hover:text-ivory md:hover:text-ink'}`

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navSurface = isScrolled || isMenuOpen ? 'bg-ivory/95 text-ink shadow-soft backdrop-blur-md' : 'bg-transparent text-ivory'
  const desktopLinkClass = ({ isActive }) =>
    `transition ${isScrolled ? (isActive ? 'text-ink' : 'text-ink/70 hover:text-ink') : isActive ? 'text-ivory' : 'text-ivory/80 hover:text-ivory'}`

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 py-4 md:px-8">
      <div className={`mx-auto max-w-7xl rounded-full border px-4 py-3 md:px-6 ${navSurface} ${
        isScrolled || isMenuOpen ? 'border-line' : 'border-transparent'
      }`}>
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="font-display text-3xl tracking-[0.22em]">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navigationItems.map((item) => (
              <NavLink key={item.label} to={item.href} className={desktopLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className={`rounded-full border p-3 transition ${
                isScrolled ? 'border-line text-ink hover:bg-sand' : 'border-ivory/20 text-ivory hover:bg-ivory/10'
              }`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative rounded-full border p-3 transition ${
                isScrolled ? 'border-line text-ink hover:bg-sand' : 'border-ivory/20 text-ivory hover:bg-ivory/10'
              }`}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-bronze px-1 text-[10px] font-semibold text-ink">
                {cartCount}
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-full border border-line p-3 text-ink transition md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 space-y-4 border-t border-line pt-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm text-ink">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={linkClassName}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 rounded-full border border-line bg-white px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(true)
                  setIsMenuOpen(false)
                }}
                className="flex-1 rounded-full border border-ink bg-ink px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ivory"
              >
                Cart ({cartCount})
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default NavBar
