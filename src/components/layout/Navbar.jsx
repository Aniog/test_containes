import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, totalItems } = useCart()
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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium ${textColor}`}>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button className="hidden md:block hover:text-accent transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="relative hover:text-accent transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4 text-sm uppercase tracking-widest font-medium text-charcoal">
            <Link to="/shop" className="py-2 border-b border-border hover:text-accent transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="py-2 border-b border-border hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="py-2 border-b border-border hover:text-accent transition-colors">About</Link>
            <Link to="/journal" className="py-2 hover:text-accent transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </header>
  )
}
