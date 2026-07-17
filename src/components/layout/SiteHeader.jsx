import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/shared/CartContext'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const SiteHeader = () => {
  const [isSolid, setIsSolid] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { cartCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  const linkClass = ({ isActive }) =>
    `transition hover:text-gold-300 ${isActive ? 'text-gold-300' : 'text-current'}`

  const useSolidHeader = isSolid || location.pathname !== '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${
        useSolidHeader
          ? 'border-b border-cream-200/20 bg-velvet-950/95 text-cream-50 shadow-editorial backdrop-blur'
          : 'bg-transparent text-cream-50'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full border border-current/20 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl tracking-[0.45em] text-current">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.35em] lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-current">
          <button
            type="button"
            className="rounded-full border border-current/20 p-2 transition hover:border-gold-300 hover:text-gold-300"
            aria-label="Search"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full border border-current/20 p-2 transition hover:border-gold-300 hover:text-gold-300"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-400 px-1 text-[10px] font-semibold text-velvet-950">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-cream-200/15 bg-velvet-950/95 px-4 transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'
        }`}
      >
        <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-cream-50">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={linkClass}
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
