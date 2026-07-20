import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md border-b border-border-warm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <div className="min-h-screen bg-cream">
      {/* Sticky Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-medium tracking-wide ${textColor} no-underline`}>
            VELMORA
          </Link>

          {/* Center: Nav Links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-sm font-sans font-medium tracking-wide uppercase ${textColor} hover:text-gold transition-colors no-underline`}>
              Shop
            </Link>
            <Link to="/collections" className={`text-sm font-sans font-medium tracking-wide uppercase ${textColor} hover:text-gold transition-colors no-underline`}>
              Collections
            </Link>
            <Link to="/#about" className={`text-sm font-sans font-medium tracking-wide uppercase ${textColor} hover:text-gold transition-colors no-underline`}>
              About
            </Link>
            <Link to="/#journal" className={`text-sm font-sans font-medium tracking-wide uppercase ${textColor} hover:text-gold transition-colors no-underline`}>
              Journal
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-gold transition-colors bg-transparent border-none p-1`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`${textColor} hover:text-gold transition-colors relative bg-transparent border-none p-1`}
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className={`md:hidden ${textColor} hover:text-gold transition-colors bg-transparent border-none p-1`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-t border-border-warm">
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link to="/shop" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors no-underline">
                Shop
              </Link>
              <Link to="/collections" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors no-underline">
                Collections
              </Link>
              <Link to="/#about" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors no-underline">
                About
              </Link>
              <Link to="/#journal" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors no-underline">
                Journal
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-serif text-2xl font-medium text-white mb-4">VELMORA</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Crafted for the modern woman. Demi-fine jewelry that bridges the gap between everyday and extraordinary.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Shop</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Huggies</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Help</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Shipping & Returns</span></li>
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Size Guide</span></li>
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Care Instructions</span></li>
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">FAQ</span></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Company</h4>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Our Story</span></li>
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Sustainability</span></li>
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Press</span></li>
                <li><span className="text-sm text-white/70 cursor-pointer hover:text-gold transition-colors">Contact</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40">Visa</span>
              <span className="text-xs text-white/40">Mastercard</span>
              <span className="text-xs text-white/40">Amex</span>
              <span className="text-xs text-white/40">Apple Pay</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  )
}

export default Layout
