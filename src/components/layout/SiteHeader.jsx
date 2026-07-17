import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    ? 'border-pearl/70 bg-ivory/78 text-velvet shadow-card backdrop-blur-xl'
    : 'border-pearl/80 bg-ivory/95 text-velvet shadow-soft backdrop-blur-xl'
  const controlClass = isHomeTop
    ? 'border-pearl/80 bg-white/45 text-velvet hover:border-champagne hover:text-champagne'
    : 'border-pearl bg-white/70 text-velvet hover:border-champagne hover:text-champagne'
  const navigationClass = isHomeTop
    ? 'text-smoke'
    : 'text-smoke'

  const isLinkActive = (to) => {
    if (to === '/shop') {
      return location.pathname === '/shop'
    }

    if (to.includes('#')) {
      const [pathname, hash] = to.split('#')
      return location.pathname === (pathname || '/') && location.hash === `#${hash}`
    }

    return location.pathname === to
  }

  const getNavLinkClass = (to) =>
    cn(
      'relative text-[10px] uppercase tracking-[0.18em] transition duration-300 ease-premium hover:text-champagne lg:text-[11px]',
      navigationClass,
      isLinkActive(to) && 'text-champagne',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 ease-premium md:px-8 lg:px-10">
      <div className={cn('mx-auto max-w-7xl rounded-full border transition-all duration-500 ease-premium', shellClass)}>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={cn('inline-flex h-10 w-10 items-center justify-center rounded-full border transition', controlClass)}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <Link
            to="/"
            className="justify-self-center font-serif text-[1.7rem] tracking-luxe text-velvet transition duration-300 ease-premium hover:text-champagne"
          >
            VELMORA
          </Link>

          <div className="flex items-center justify-self-end gap-2">
            <Link
              to="/shop"
              aria-label="Search products"
              className={cn('inline-flex h-10 w-10 items-center justify-center rounded-full border transition', controlClass)}
            >
              <Search className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Open cart"
              className={cn('relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition', controlClass)}
              onClick={openCart}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-velvet">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-4 md:grid lg:px-8">
          <Link to="/" className="justify-self-start font-serif text-[2rem] tracking-luxe text-current transition duration-300 ease-premium hover:text-champagne">
            VELMORA
          </Link>

          <nav className="flex items-center justify-center gap-8 text-[11px] uppercase tracking-luxe">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className={getNavLinkClass(item.to)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <Link
              to="/shop"
              aria-label="Search products"
              className={cn('inline-flex h-10 w-10 items-center justify-center rounded-full border transition', controlClass)}
            >
              <Search className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Open cart"
              className={cn('relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition', controlClass)}
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
          <div className={cn('border-t px-4 pb-4 pt-3 md:hidden', isHomeTop ? 'border-pearl/15' : 'border-pearl')}>
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-luxe">
              {navItems.map((item) => (
                <Link key={item.label} to={item.to} className={getNavLinkClass(item.to)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default SiteHeader
