import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-charcoal'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-content mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-1 transition-colors ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold transition-colors ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Center nav links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors hover:text-gold ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 transition-colors ${textColor}`}>
          <button className="p-1 hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className="p-1 hover:text-gold transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-warm-border">
          <div className="px-5 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm tracking-[0.15em] uppercase font-medium text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
