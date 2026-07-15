import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function SiteHeader() {
  const location = useLocation()
  const navigate = useNavigate()
  const { itemCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHome = location.pathname === '/'
  const solidHeader = !isHome || isScrolled || isMenuOpen

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
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 transition duration-300',
        solidHeader
          ? 'border-b border-velmora-mist/15 bg-velmora-obsidian/95 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 lg:gap-8">
          <button
            aria-label="Toggle menu"
            className="rounded-full border border-velmora-mist/20 p-2 text-velmora-ivory lg:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link className="font-serif text-3xl tracking-product text-velmora-ivory" to="/">
            VELMORA
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'text-sm uppercase tracking-product transition',
                  isActive ? 'text-velmora-gold' : 'text-velmora-ivory/85 hover:text-velmora-gold',
                )
              }
              key={link.label}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Search catalog"
            className="rounded-full border border-velmora-mist/20 p-2.5 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={() => navigate('/shop')}
            type="button"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Open cart"
            className="relative rounded-full border border-velmora-mist/20 p-2.5 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={openCart}
            type="button"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-obsidian">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-velmora-mist/15 bg-velmora-obsidian/98 transition-all duration-300 lg:hidden',
          isMenuOpen ? 'max-h-80' : 'max-h-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'border-b border-velmora-mist/10 py-4 text-sm uppercase tracking-product transition last:border-b-0',
                  isActive ? 'text-velmora-gold' : 'text-velmora-ivory/85',
                )
              }
              key={link.label}
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
