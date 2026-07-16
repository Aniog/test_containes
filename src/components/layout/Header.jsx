import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const overlayMode = pathname === '/' && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        overlayMode
          ? 'bg-transparent text-[rgba(247,241,232,0.98)]'
          : 'border-b border-champagne bg-pearl/95 text-espresso backdrop-blur',
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="font-serif text-3xl tracking-[0.24em]">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-sm uppercase tracking-[0.2em] transition duration-300 hover:text-gold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className={cn(
              'rounded-full border p-3 transition duration-300 hover:border-gold hover:text-gold',
              overlayMode ? 'border-pearl/30' : 'border-champagne',
            )}
            aria-label="Search collection"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={cn(
              'relative rounded-full border p-3 transition duration-300 hover:border-gold hover:text-gold',
              overlayMode ? 'border-pearl/30' : 'border-champagne',
            )}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {itemCount ? (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-pearl">
                {itemCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              'rounded-full border p-3 transition duration-300 lg:hidden',
              overlayMode ? 'border-pearl/30' : 'border-champagne',
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-champagne bg-pearl lg:hidden">
          <nav className="section-shell flex flex-col gap-5 py-6">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-sm uppercase tracking-[0.2em] text-espresso"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
