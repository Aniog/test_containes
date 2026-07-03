import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setCartOpen, cartCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden -ml-2 p-2 text-velvet-700"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Center links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/shop?category=Earrings" className="nav-link">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="nav-link">Necklaces</Link>
            <Link to="/shop?tag=huggies" className="nav-link">Huggies</Link>
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-velvet-950 font-medium">
              VELMORA
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-velvet-700 hover:text-gold-600 transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 text-velvet-700 hover:text-gold-600 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-cream shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5">
            <span className="font-serif text-lg tracking-[0.2em] text-velvet-950 font-medium">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-velvet-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="hairline" />
          <div className="flex flex-col p-5 gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-wider text-velvet-700 hover:text-gold-600 transition-colors">Shop All</Link>
            <Link to="/shop?category=Earrings" className="text-sm uppercase tracking-wider text-velvet-700 hover:text-gold-600 transition-colors">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="text-sm uppercase tracking-wider text-velvet-700 hover:text-gold-600 transition-colors">Necklaces</Link>
            <Link to="/shop?tag=huggies" className="text-sm uppercase tracking-wider text-velvet-700 hover:text-gold-600 transition-colors">Huggies</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}