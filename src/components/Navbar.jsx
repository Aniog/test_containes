import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-sand'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${textColor} bg-transparent border-none`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-widest-plus ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm tracking-wider uppercase font-sans font-light ${textColor} hover:opacity-70 transition-opacity`}>
            Shop
          </Link>
          <Link to="/collections" className={`text-sm tracking-wider uppercase font-sans font-light ${textColor} hover:opacity-70 transition-opacity`}>
            Collections
          </Link>
          <Link to="/#about" className={`text-sm tracking-wider uppercase font-sans font-light ${textColor} hover:opacity-70 transition-opacity`}>
            About
          </Link>
          <Link to="/#journal" className={`text-sm tracking-wider uppercase font-sans font-light ${textColor} hover:opacity-70 transition-opacity`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-2 ${textColor} bg-transparent border-none hover:opacity-70 transition-opacity`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`p-2 relative ${textColor} bg-transparent border-none hover:opacity-70 transition-opacity`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-5 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm tracking-wider uppercase font-sans text-charcoal py-2 border-b border-sand">
              Shop
            </Link>
            <Link to="/collections" className="text-sm tracking-wider uppercase font-sans text-charcoal py-2 border-b border-sand">
              Collections
            </Link>
            <Link to="/#about" className="text-sm tracking-wider uppercase font-sans text-charcoal py-2 border-b border-sand">
              About
            </Link>
            <Link to="/#journal" className="text-sm tracking-wider uppercase font-sans text-charcoal py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
