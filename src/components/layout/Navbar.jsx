import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/data/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
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

  const navBg = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-sm border-b border-brand-sand/50'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white'

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide-xl ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:opacity-70 transition-opacity`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-2 ${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative ${textColor} hover:opacity-70 transition-opacity`}
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-widest uppercase font-sans font-medium text-brand-charcoal hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
