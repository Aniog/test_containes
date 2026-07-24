import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop?category=huggies', label: 'Huggies' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, toggleCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-stone-700 hover:text-stone-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span
              className={cn(
                'font-serif text-xl md:text-2xl tracking-widest transition-colors duration-300',
                scrolled ? 'text-stone-900' : 'text-stone-900'
              )}
            >
              VELMORA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-xs tracking-widest uppercase transition-colors duration-200',
                  location.pathname === link.to
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-500 hover:text-stone-900'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative"
              onClick={toggleCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C5A059] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-stone-200 mt-2 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
