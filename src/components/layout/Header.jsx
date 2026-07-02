import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const Header = () => {
  const location = useLocation()
  const { itemCount, openCart, closeCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
    closeCart()
  }, [closeCart, location.pathname, location.search, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSolid = !isHome || scrolled || menuOpen
  const wrapperClass = isSolid
    ? 'border-b border-stone-200 bg-stone-50/95 shadow-[0_12px_40px_rgba(28,25,23,0.06)] backdrop-blur-xl'
    : 'bg-transparent text-stone-50'
  const textClass = isSolid ? 'text-stone-900' : 'text-stone-50'
  const subTextClass = isSolid ? 'text-stone-600' : 'text-stone-100/90'
  const iconClass = isSolid
    ? 'border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900'
    : 'border-white/30 text-stone-50 hover:border-white hover:text-white'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition duration-300 ${wrapperClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className={`rounded-full border p-3 transition duration-300 ${iconClass}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className={`font-serif text-3xl tracking-[0.38em] ${textClass}`}>
          VELMORA
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm uppercase tracking-[0.26em] transition duration-300 hover:text-amber-700 ${subTextClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/shop"
            className={`rounded-full border p-3 transition duration-300 ${iconClass}`}
            aria-label="Search the collection"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className={`relative rounded-full border p-3 transition duration-300 ${iconClass}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-[10px] font-medium text-stone-50">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-4 text-stone-900 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.26em] text-stone-700 transition duration-300 hover:text-amber-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
