import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navigationLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=featured' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function SiteHeader() {
  const location = useLocation()
  const { itemCount, setIsCartOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.search, location.hash])

  const headerIsSolid = !isHome || isScrolled || isMenuOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 transition duration-300',
        headerIsSolid
          ? 'border-b border-sand/80 bg-ivory/95 text-ink backdrop-blur-xl'
          : 'bg-transparent text-ivory',
      )}
    >
      <div className="mx-auto flex min-h-18 max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link className="font-serif text-2xl tracking-[0.5em] sm:text-[1.75rem]" to="/">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.label}
              className={({ isActive }) =>
                cn(
                  'text-xs uppercase tracking-[0.34em] transition hover:text-gold',
                  isActive && 'text-gold',
                )
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition hover:border-gold hover:text-gold"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 transition hover:border-gold hover:text-gold"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-ink">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-sand/60 bg-ivory text-ink transition-[max-height] duration-300 lg:hidden',
          isMenuOpen ? 'max-h-80' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="mx-auto flex max-w-[1360px] flex-col px-4 py-4 sm:px-6">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.label}
              className="border-b border-sand/70 py-4 text-xs uppercase tracking-[0.34em] text-ink/80 last:border-b-0"
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
