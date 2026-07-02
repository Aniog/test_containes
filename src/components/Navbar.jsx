import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import CartDrawer from './CartDrawer'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const overHero = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          overHero ? 'bg-transparent text-cream' : 'bg-cream/95 backdrop-blur-sm text-ink shadow-sm'
        )}
      >
        <nav className="container-main flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl uppercase tracking-widest font-semibold"
          >
            Velmora
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-sans text-[11px] uppercase tracking-widest font-medium hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:text-gold transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-ink text-[10px] font-sans font-bold rounded-full flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-ink/50 transition-opacity duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl transform transition-transform duration-300 md:hidden flex flex-col',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-muted">
          <span className="font-serif text-xl uppercase tracking-widest text-ink">Menu</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-ink hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <ul className="flex-1 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
