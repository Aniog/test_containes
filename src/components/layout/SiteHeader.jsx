import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../cart/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.hash, location.pathname])

  const isTransparent = useMemo(
    () => location.pathname === '/' && scrollY < 32 && !isMenuOpen,
    [isMenuOpen, location.pathname, scrollY],
  )

  const textTone = isTransparent
    ? 'text-white/90 hover:text-white'
    : 'text-ink hover:text-rosewood'
  const headerTone = isTransparent
    ? 'bg-transparent'
    : 'border-b border-sandDeep/70 bg-porcelain/90 shadow-card backdrop-blur-md'
  const logoTone = isTransparent ? 'text-white' : 'text-ink'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${headerTone}`}>
      <div className="page-shell flex h-20 items-center justify-between gap-4 md:h-24">
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`rounded-full border p-2 transition ${
              isTransparent
                ? 'border-white/30 text-white'
                : 'border-sandDeep/70 text-ink'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className={`font-display text-xl uppercase tracking-luxe transition md:text-2xl ${logoTone}`}
        >
          Velmora
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm uppercase tracking-widest transition ${textTone}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Search collection"
            onClick={() => navigate('/shop')}
            className={`rounded-full border p-2 transition ${
              isTransparent
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-sandDeep/70 text-ink hover:border-rosewood hover:text-rosewood'
            }`}
          >
            <Search className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <button
            id="site-cart-trigger"
            type="button"
            aria-label="Open cart"
            onClick={(event) => openCart(event.currentTarget)}
            className={`relative rounded-full border p-2 transition focus:outline-none focus:ring-2 focus:ring-rosewood focus:ring-offset-2 ${
              isTransparent
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-sandDeep/70 text-ink hover:border-rosewood hover:text-rosewood'
            }`}
          >
            <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-champagne text-[11px] font-medium text-champagneInk">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-sandDeep/70 bg-porcelain/95 px-4 py-4 backdrop-blur-md md:hidden">
          <div className="page-shell flex flex-col gap-4 px-0 py-2 text-sm uppercase tracking-widest text-ink">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="py-1 transition hover:text-rosewood">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
