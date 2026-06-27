import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
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

  const navBg = !isHome || scrolled
    ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-sm'
    : 'bg-transparent'

  const textColor = !isHome || scrolled ? 'text-text' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl lg:text-3xl font-medium tracking-wide-sm ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide-sm uppercase ${textColor}`}>
          <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/shop?category=earrings" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button className="hover:opacity-70 transition-opacity" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="lg:hidden hover:opacity-70 transition-opacity"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium tracking-wide-sm uppercase text-text">
            <Link to="/shop" className="py-2 border-b border-border">Shop</Link>
            <Link to="/shop?category=earrings" className="py-2 border-b border-border">Collections</Link>
            <Link to="/about" className="py-2 border-b border-border">About</Link>
            <Link to="/journal" className="py-2">Journal</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
