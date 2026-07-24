import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { name: 'Shop', path: '/collection' },
  { name: 'Collections', path: '/collection' },
  { name: 'About', path: '/#about' },
  { name: 'Journal', path: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const bgClass = scrolled || !isHome
    ? 'bg-cream-100/95 backdrop-blur-md shadow-luxury border-b border-charcoal-200/30'
    : 'bg-transparent'

  const textClass = scrolled || !isHome ? 'text-charcoal' : 'text-cream-100'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8 xl:px-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden ${textClass} transition-colors`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-light ${textClass} transition-colors absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0`}
          >
            VELMORA
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`caption ${textClass} hover:opacity-70 transition-opacity`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              className={`${textClass} hover:opacity-70 transition-opacity hidden sm:block`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => toggleCart(true)}
              className={`${textClass} hover:opacity-70 transition-opacity relative`}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-charcoal text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[300px] max-w-[85vw] bg-cream-100 shadow-luxury-xl animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-charcoal-200/30">
              <span className="font-serif text-xl tracking-ultra-wide text-charcoal">
                VELMORA
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-charcoal hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-3 text-charcoal font-sans text-base tracking-wider hover:text-gold transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-charcoal-200/30">
              <p className="caption text-charcoal-400">
                Free Worldwide Shipping
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
