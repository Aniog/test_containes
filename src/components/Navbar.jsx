import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome
    ? 'bg-brand-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'
  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-brand-text-light'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        navBg
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn('lg:hidden p-2', textColor)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl lg:text-3xl font-medium tracking-wider',
              textColor,
              'lg:absolute lg:left-1/2 lg:-translate-x-1/2'
            )}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8 absolute left-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:text-brand-gold',
                  textColor
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={cn('flex items-center gap-4', textColor)}>
            <button className="p-2 hover:text-brand-gold transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              onClick={openCart}
              className="p-2 hover:text-brand-gold transition-colors relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-brand-charcoal text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="bg-brand-warm-white border-t border-brand-divider-light px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="block text-sm font-medium tracking-widest uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
