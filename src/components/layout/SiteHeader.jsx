import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = ({ cartCount, onCartOpen }) => {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const homeHero = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 36 || !homeHero)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [homeHero])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const headerTone = solid
    ? 'border-white/10 bg-noir/95 text-ivory shadow-soft backdrop-blur-xl'
    : 'border-transparent bg-gradient-to-b from-noir/70 via-noir/35 to-transparent text-ivory'

  const linkClass = ({ isActive }) =>
    `transition hover:text-gold ${isActive ? 'text-gold' : ''}`

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-300 ${headerTone}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex rounded-full border border-current/15 p-2 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-display text-3xl tracking-[0.35em] text-current sm:text-4xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-brand lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="rounded-full border border-current/15 p-2 transition hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onCartOpen}
              className="relative rounded-full border border-current/15 p-2 transition hover:bg-white/10"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-noir">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="space-y-1 px-4 py-4 text-sm uppercase tracking-brand text-ivory sm:px-6">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className="block rounded-full px-4 py-3 transition hover:bg-white/10">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

export default SiteHeader
