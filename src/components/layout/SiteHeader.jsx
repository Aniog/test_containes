import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/' },
  { label: 'Journal', to: '/' },
]

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount, toggleCart } = useStore()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const isHome = location.pathname === '/'
  const transparentHeader = isHome && !isScrolled && !isMenuOpen
  const shellClassName = transparentHeader
    ? 'border-transparent bg-transparent text-ivory'
    : 'border-velvet/10 bg-ivory/95 text-velvet shadow-soft backdrop-blur-md'

  const linkClassName = ({ isActive }) =>
    `transition ${isActive ? 'text-gold-deep' : transparentHeader ? 'text-ivory/85 hover:text-ivory' : 'text-velvet/70 hover:text-velvet'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-300 ${shellClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10 xl:px-16">
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full border border-current/15 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="font-serif text-3xl tracking-[0.2em] md:text-4xl">
          VELMORA
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-eyebrow md:flex">
          {navigation.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            aria-label="Search products"
            className="rounded-full border border-current/15 p-2 transition hover:border-gold hover:text-gold-deep"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={toggleCart}
            aria-label="Open shopping cart"
            className="relative rounded-full border border-current/15 p-2 transition hover:border-gold hover:text-gold-deep"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-velvet">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-80 border-t border-current/10' : 'max-h-0'}`}>
        <nav className="space-y-4 px-5 py-5 text-sm uppercase tracking-eyebrow">
          {navigation.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
