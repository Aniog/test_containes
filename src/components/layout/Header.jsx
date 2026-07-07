import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import Logo from './Logo'

const navigationItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

function NavLinks({ className = '', onNavigate = () => {} }) {
  return (
    <div className={className}>
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          onClick={onNavigate}
          className="text-xs uppercase tracking-widest transition duration-300 hover:text-amber-500"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function Header() {
  const location = useLocation()
  const { totalItems, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHome = location.pathname === '/'
  const transparent = isHome && !isScrolled && !isMenuOpen

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b transition duration-500',
          transparent
            ? 'border-transparent bg-transparent text-stone-50'
            : 'border-stone-200 bg-stone-50/95 text-stone-950 backdrop-blur-xl',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border transition',
                transparent
                  ? 'border-stone-200/30 bg-stone-950/10 text-stone-50 hover:bg-stone-950/20'
                  : 'border-stone-300 bg-white text-stone-950 hover:bg-stone-100',
              )}
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Logo light={transparent} className="text-base sm:text-lg" />
          </div>

          <Logo light={transparent} className="hidden lg:block" />

          <NavLinks className="hidden items-center gap-10 lg:flex" />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/shop"
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border transition',
                transparent
                  ? 'border-stone-200/30 bg-stone-950/10 text-stone-50 hover:bg-stone-950/20'
                  : 'border-stone-300 bg-white text-stone-950 hover:bg-stone-100',
              )}
              aria-label="Search products"
            >
              <Search className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                'relative flex h-10 w-10 items-center justify-center rounded-full border transition',
                transparent
                  ? 'border-stone-200/30 bg-stone-950/10 text-stone-50 hover:bg-stone-950/20'
                  : 'border-stone-300 bg-white text-stone-950 hover:bg-stone-100',
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-semibold text-stone-950">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-x-4 top-20 z-30 rounded-3xl border border-stone-800 bg-stone-950/95 p-6 text-stone-100 shadow-xl shadow-stone-950/20 transition duration-300 lg:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <NavLinks className="flex flex-col gap-5" onNavigate={() => setIsMenuOpen(false)} />
      </div>
    </>
  )
}

export default Header
