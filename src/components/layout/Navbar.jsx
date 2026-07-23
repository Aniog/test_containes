import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = (!isHome || scrolled)
    ? 'bg-ivory/95 backdrop-blur-sm border-b border-sand'
    : 'bg-transparent'

  const textColor = (!isHome || scrolled) ? 'text-charcoal' : 'text-ivory'

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-medium tracking-widest uppercase ${textColor} hover:opacity-70 transition-opacity`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className={`p-2 ${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative ${textColor} hover:opacity-70 transition-opacity`}
            onClick={() => setIsOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-ivory text-[10px] font-medium rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand">
          <div className="px-4 py-6 space-y-4">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
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
