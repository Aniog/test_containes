import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isHome && !scrolled
            ? 'bg-transparent text-velmora-cream'
            : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-charcoal border-b border-velmora-light/50'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest font-light">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className={cn(
                  'text-xs tracking-widest uppercase transition-opacity hover:opacity-70'
                )}
              >
                Shop
              </Link>
              <Link
                to="/shop?category=earrings"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              >
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 -mr-2" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={onCartOpen}
                className="p-2 -mr-2 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-velmora-gold text-velmora-charcoal text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-velmora-cream transition-transform duration-500 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link to="/shop" className="font-serif text-3xl tracking-wider">Shop</Link>
          <Link to="/shop?category=earrings" className="font-serif text-3xl tracking-wider">Collections</Link>
          <Link to="/about" className="font-serif text-3xl tracking-wider">About</Link>
          <Link to="/journal" className="font-serif text-3xl tracking-wider">Journal</Link>
        </div>
      </div>
    </>
  )
}
