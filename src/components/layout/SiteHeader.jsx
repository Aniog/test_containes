import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const navigation = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=Necklaces' },
  { label: 'About', href: '/#our-story' },
  { label: 'Journal', href: '/#journal' },
]

export default function SiteHeader() {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent text-velmora-ivory'
          : 'border-b border-velmora-line/80 bg-velmora-ivory/95 text-velmora-espresso shadow-velmora-sm backdrop-blur-xl',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:w-1/3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden',
              isTransparent
                ? 'border-white/30 bg-white/10 text-velmora-ivory'
                : 'border-velmora-line bg-velmora-mist text-velmora-espresso',
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.45em] text-current sm:text-3xl"
          >
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 lg:flex lg:w-1/3">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.35em] transition hover:opacity-100',
                  isTransparent ? 'opacity-85 hover:opacity-100' : 'opacity-75',
                  isActive && 'opacity-100',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:w-1/3">
          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition',
              isTransparent
                ? 'border-white/30 bg-white/10 text-velmora-ivory hover:bg-white/15'
                : 'border-velmora-line bg-velmora-mist text-velmora-espresso hover:bg-velmora-sand',
            )}
            aria-label="Search"
          >
            <Search size={17} />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn(
              'relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition',
              isTransparent
                ? 'border-white/30 bg-white/10 text-velmora-ivory hover:bg-white/15'
                : 'border-velmora-line bg-velmora-mist text-velmora-espresso hover:bg-velmora-sand',
            )}
            aria-label="Open cart"
          >
            <ShoppingBag size={17} />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-bronze px-1 text-[10px] font-semibold text-velmora-ivory">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t transition-all duration-300 lg:hidden',
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
          isTransparent
            ? 'border-white/15 bg-velmora-espresso/75 backdrop-blur-xl'
            : 'border-velmora-line bg-velmora-ivory',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className="border-b border-current/10 py-4 text-xs uppercase tracking-[0.35em] last:border-none"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
