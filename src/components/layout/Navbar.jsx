import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

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

  const navBg = !isHome || scrolled
    ? 'bg-background/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent'

  const textColor = !isHome || scrolled ? 'text-foreground' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide ${textColor}`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className={`hidden md:flex items-center gap-8 text-sm tracking-wider uppercase ${textColor}`}>
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor}`}>
            <button aria-label="Search" className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className="relative hover:opacity-70 transition-opacity"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20">
          <div className="flex flex-col items-center gap-8 py-12 text-lg tracking-wider uppercase text-foreground">
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </>
  )
}
