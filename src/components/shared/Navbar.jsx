import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from './CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { openCart, totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-light ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/shop" className={`text-xs tracking-wide uppercase font-medium ${textColor} hover:text-brand-gold transition-colors`}>Shop</Link>
            <Link to="/collections" className={`text-xs tracking-wide uppercase font-medium ${textColor} hover:text-brand-gold transition-colors`}>Collections</Link>
            <Link to="/about" className={`text-xs tracking-wide uppercase font-medium ${textColor} hover:text-brand-gold transition-colors`}>About</Link>
            <Link to="/journal" className={`text-xs tracking-wide uppercase font-medium ${textColor} hover:text-brand-gold transition-colors`}>Journal</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} transition-colors`} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={`relative ${textColor} transition-colors`} onClick={openCart} aria-label="Cart">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand/50">
          <div className="flex flex-col py-6 px-6 gap-5">
            <Link to="/shop" className="text-sm tracking-wide uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors">Shop</Link>
            <Link to="/collections" className="text-sm tracking-wide uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors">Collections</Link>
            <Link to="/about" className="text-sm tracking-wide uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors">About</Link>
            <Link to="/journal" className="text-sm tracking-wide uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
