import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop', type: 'route' },
  { label: 'Collections', to: '/collections', type: 'route' },
  { label: 'About', to: '/#about', type: 'anchor' },
  { label: 'Journal', to: '/#journal', type: 'anchor' },
]

const SiteHeader = () => {
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  const isTransparent = location.pathname === '/' && !hasScrolled
  const shellClassName = isTransparent
    ? 'border-transparent bg-transparent text-velmora-ivory'
    : 'border-velmora-line bg-velmora-parchment/95 text-velmora-ink shadow-velmora backdrop-blur-md'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${shellClassName}`}>
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 lg:w-1/3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link to="/" className="font-display text-3xl tracking-[0.42em]">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 lg:flex lg:w-1/3">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.label}
                to={item.to}
                className="text-xs uppercase tracking-luxury transition hover:text-velmora-gold"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.to}
                className="text-xs uppercase tracking-luxury transition hover:text-velmora-gold"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:w-1/3">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Open cart drawer"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 bg-velmora-ink px-4 py-5 text-velmora-ivory shadow-velmora lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm uppercase tracking-luxury"
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.to} className="text-sm uppercase tracking-luxury">
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
