import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount, openDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !mobileMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent text-velvet-50'
          : 'bg-velvet-950/95 backdrop-blur-md text-velvet-200 border-b border-velvet-800'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links - desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-super-wide uppercase">
            <Link to="/shop" className="hover:text-gold-400 transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="hover:text-gold-400 transition-colors duration-300">
              Earrings
            </Link>
            <Link to="/shop?category=necklaces" className="hover:text-gold-400 transition-colors duration-300">
              Necklaces
            </Link>
            <Link to="/shop?category=huggies" className="hover:text-gold-400 transition-colors duration-300">
              Huggies
            </Link>
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-super-wide absolute left-1/2 -translate-x-1/2"
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 hover:text-gold-400 transition-colors duration-300" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={openDrawer}
              className="p-2 hover:text-gold-400 transition-colors duration-300 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold-500 text-velvet-950 text-[10px] font-semibold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-velvet-950/95 backdrop-blur-md border-t border-velvet-800">
          <nav className="container-site py-6 flex flex-col gap-5">
            <Link to="/shop" className="text-sm tracking-super-wide uppercase hover:text-gold-400 transition-colors">
              Shop All
            </Link>
            <Link to="/shop?category=earrings" className="text-sm tracking-super-wide uppercase hover:text-gold-400 transition-colors">
              Earrings
            </Link>
            <Link to="/shop?category=necklaces" className="text-sm tracking-super-wide uppercase hover:text-gold-400 transition-colors">
              Necklaces
            </Link>
            <Link to="/shop?category=huggies" className="text-sm tracking-super-wide uppercase hover:text-gold-400 transition-colors">
              Huggies
            </Link>
            <Link to="/shop" className="text-sm tracking-super-wide uppercase hover:text-gold-400 transition-colors">
              About
            </Link>
            <Link to="/shop" className="text-sm tracking-super-wide uppercase hover:text-gold-400 transition-colors">
              Journal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}