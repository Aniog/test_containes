import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../contexts/CartContext.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
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
  }, [location])

  const bgClass =
    isHome && !scrolled && !mobileOpen
      ? 'bg-transparent text-white'
      : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-charcoal shadow-sm'

  const linkHover =
    isHome && !scrolled && !mobileOpen
      ? 'hover:text-velmora-gold-light'
      : 'hover:text-velmora-gold-dark'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-widest uppercase"
            >
              Velmora
            </Link>

            <div className="hidden md:flex items-center gap-10">
              <Link to="/shop" className={`text-xs uppercase tracking-widest transition-colors ${linkHover}`}>
                Shop
              </Link>
              <Link to="/shop?category=earrings" className={`text-xs uppercase tracking-widest transition-colors ${linkHover}`}>
                Collections
              </Link>
              <Link to="/#story" className={`text-xs uppercase tracking-widest transition-colors ${linkHover}`}>
                About
              </Link>
              <Link to="/" className={`text-xs uppercase tracking-widest transition-colors ${linkHover}`}>
                Journal
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button className={`p-1 transition-colors ${linkHover}`}>
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className={`relative p-1 transition-colors ${linkHover}`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className={`md:hidden p-1 transition-colors ${linkHover}`}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-border px-5 py-6 space-y-5">
            <Link to="/shop" className="block text-sm uppercase tracking-widest text-velmora-charcoal">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="block text-sm uppercase tracking-widest text-velmora-charcoal">
              Collections
            </Link>
            <Link to="/#story" className="block text-sm uppercase tracking-widest text-velmora-charcoal">
              About
            </Link>
            <Link to="/" className="block text-sm uppercase tracking-widest text-velmora-charcoal">
              Journal
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}