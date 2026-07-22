import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/collections' },
    { label: 'About', to: '/' },
    { label: 'Journal', to: '/' },
  ]

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-soft'
    : 'bg-transparent'

  const textClass = scrolled || !isHome ? 'text-charcoal' : 'text-cream'

  return (
    <>
      <nav
        className={`nav-wrapper fixed top-0 left-0 right-0 z-50 ${bgClass}`}
      >
        <div className="container-narrow flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl tracking-ultra-wide uppercase ${textClass} font-medium`}
          >
            Velmora
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-caption uppercase tracking-ultra-wide ${textClass} hover:text-gold transition-colors duration-200 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 ${textClass} hover:text-gold transition-colors`}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              className={`p-2 ${textClass} hover:text-gold transition-colors relative`}
              onClick={openCart}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-cream text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="lg:hidden bg-cream border-t border-charcoal/10">
            <div className="container-narrow py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-body uppercase tracking-ultra-wide text-charcoal hover:text-gold transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
