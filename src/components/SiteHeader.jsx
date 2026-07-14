import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const isOverlayPage = useMemo(
    () => location.pathname === '/' && !isScrolled,
    [isScrolled, location.pathname],
  )

  const headerClassName = isOverlayPage
    ? 'bg-transparent'
    : 'border-b border-velmora-taupe/20 bg-velmora-ivory/95 shadow-lg backdrop-blur-xl'

  const textClassName = isOverlayPage ? 'text-velmora-ivory' : 'text-velmora-espresso'
  const navClassName = isOverlayPage ? 'text-velmora-ivory/85' : 'text-velmora-cacao/72'
  const iconButtonClassName = isOverlayPage
    ? 'border-white/15 text-velmora-ivory hover:border-velmora-goldSoft hover:text-velmora-goldSoft'
    : 'border-velmora-taupe/35 text-velmora-espresso hover:border-velmora-goldDeep hover:text-velmora-goldDeep'
  const mobileMenuClassName = isOverlayPage
    ? 'border-t border-white/10 bg-velmora-espresso/95'
    : 'border-t border-velmora-taupe/15 bg-velmora-ivory/99'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${headerClassName}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 ${textClassName}`}>
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${iconButtonClassName}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.45em] sm:text-3xl ${textClassName}`}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={`text-xs uppercase tracking-[0.35em] transition hover:text-velmora-goldSoft ${navClassName}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${iconButtonClassName}`}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${iconButtonClassName}`}
            aria-label="Cart"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-espresso">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden px-5 transition-all duration-300 md:hidden ${mobileMenuClassName} ${
          isMenuOpen ? 'max-h-72 py-4' : 'max-h-0 py-0'
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={`text-xs uppercase tracking-[0.35em] transition hover:text-velmora-goldSoft ${navClassName}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
