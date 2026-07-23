import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

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
    ? 'bg-background/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-foreground' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl lg:text-3xl tracking-wide ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Center links - desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/shop" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors no-underline`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors no-underline`}>
            Collections
          </Link>
          <Link to="/#about" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors no-underline`}>
            About
          </Link>
          <Link to="/#journal" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-accent transition-colors no-underline`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-2 ${textColor} hover:text-accent transition-colors bg-transparent border-none`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative ${textColor} hover:text-accent transition-colors bg-transparent border-none`}
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className={`lg:hidden p-2 ${textColor} bg-transparent border-none`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors no-underline">
              Shop
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors no-underline">
              Collections
            </Link>
            <Link to="/#about" className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors no-underline">
              About
            </Link>
            <Link to="/#journal" className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors no-underline">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
