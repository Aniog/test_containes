import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const isTransparent = location.pathname === '/' && !scrolled && !mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-deep shadow-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest shrink-0">
            VELMORA
          </Link>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase">
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Collections</Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">About</Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Journal</Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="hover:text-velmora-gold transition-colors" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button className="relative hover:text-velmora-gold transition-colors" onClick={openCart} aria-label="Cart">
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-velmora-gold text-white text-[10px] flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden hover:text-velmora-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-velmora-hairline py-6 flex flex-col gap-4 text-sm tracking-widest uppercase bg-velmora-cream">
            <Link to="/shop" className="hover:text-velmora-gold transition-colors px-2">Shop</Link>
            <Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors px-2">Collections</Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors px-2">About</Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors px-2">Journal</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
