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
    ? 'bg-background/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-foreground' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} transition-colors duration-300`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide ${textColor} transition-colors duration-300`}>
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center gap-8 ${textColor} transition-colors duration-300`}>
            <Link to="/shop" className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300">
              Collections
            </Link>
            <Link to="/about" className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300">
              About
            </Link>
            <Link to="/journal" className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor} transition-colors duration-300`}>
            <button aria-label="Search" className="hover:text-accent transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
              className="relative hover:text-accent transition-colors duration-300"
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
        <div className="fixed inset-0 z-40 bg-background pt-16">
          <div className="flex flex-col items-center gap-8 pt-12">
            <Link to="/shop" className="font-serif text-2xl text-foreground hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="font-serif text-2xl text-foreground hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-2xl text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="font-serif text-2xl text-foreground hover:text-accent transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
