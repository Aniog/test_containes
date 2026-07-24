import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const AppHeader = () => {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  const isTransparent = useMemo(
    () => location.pathname === '/' && !isScrolled,
    [isScrolled, location.pathname],
  )

  const navTone = isTransparent
    ? 'border-white/10 bg-transparent text-velmora-ivory'
    : 'border-velmora-sand/80 bg-velmora-ivory/95 text-velmora-ink backdrop-blur-xl shadow-soft'

  const linkTone = isTransparent
    ? 'text-velmora-sand hover:text-velmora-ivory'
    : 'text-velmora-smoke hover:text-velmora-ink'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 lg:px-8">
      <div className={`mx-auto flex max-w-[1380px] items-center justify-between rounded-full border px-5 py-3 transition duration-300 ${navTone}`}>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-display text-3xl tracking-[0.35em] sm:text-4xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition duration-300 ${linkTone} ${
                  isActive ? (isTransparent ? 'text-velmora-ivory' : 'text-velmora-ink') : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:bg-black/5"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:bg-black/5"
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount > 0 ? (
              <span className="absolute right-1 top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto mt-3 max-w-[1380px] rounded-[2rem] border border-velmora-sand bg-velmora-card p-6 text-velmora-ink shadow-velmora md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-sm uppercase tracking-widest text-velmora-smoke transition hover:text-velmora-ink"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default AppHeader
