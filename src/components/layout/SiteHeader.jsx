import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function SiteHeader() {
  const { itemCount, openCart } = useCart()
  const location = useLocation()
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
  }, [location.pathname, location.hash, location.search])

  const isHomeTop = location.pathname === '/' && !isScrolled
  const shellClass = isHomeTop
    ? 'border-transparent bg-transparent text-ivory'
    : 'border-pearl/80 bg-ivory/90 text-velvet shadow-soft backdrop-blur'

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-premium', shellClass)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={cn('rounded-full border p-2 transition', isHomeTop ? 'border-ivory/30 text-ivory' : 'border-pearl text-velvet')}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-3xl tracking-luxe md:text-[2rem]">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-luxe md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn('transition hover:text-champagne', isActive && item.to === '/shop' && 'text-champagne')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/shop"
            aria-label="Search products"
            className={cn('rounded-full border p-2 transition hover:border-champagne hover:text-champagne', isHomeTop ? 'border-ivory/30 text-ivory' : 'border-pearl text-velvet')}
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Open cart"
            className={cn('relative rounded-full border p-2 transition hover:border-champagne hover:text-champagne', isHomeTop ? 'border-ivory/30 text-ivory' : 'border-pearl text-velvet')}
            onClick={openCart}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-velvet">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-pearl bg-ivory px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-luxe text-velvet">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="transition hover:text-champagne">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
