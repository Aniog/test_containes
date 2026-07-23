import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import CartDrawer from '@/components/cart/CartDrawer'

const navLinks = [
  { label: 'Shop', path: '/collection' },
  { label: 'Collections', path: '/collection' },
  { label: 'About', path: '/' },
  { label: 'Journal', path: '/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${textColor}`} />
              ) : (
                <Menu className={`w-5 h-5 ${textColor}`} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider ${textColor}`}>
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 hover:text-gold ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`p-2 transition-colors duration-300 hover:text-gold ${textColor}`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 transition-colors duration-300 hover:text-gold relative ${textColor}`}
                aria-label="Cart"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 bg-cream border-t border-divider">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block py-3 text-sm tracking-wider uppercase font-sans font-medium text-[#1A1A1A] hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}