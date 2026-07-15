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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-espresso'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
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
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs tracking-product uppercase font-sans font-medium transition-colors hover:text-gold ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-1 transition-colors hover:text-gold ${textColor}`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDrawer}
              className={`p-1 transition-colors hover:text-gold relative ${textColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-warm-200">
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm tracking-product uppercase font-sans font-medium text-espresso hover:text-gold transition-colors"
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
