import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
    : 'bg-transparent'

  const textClass = !scrolled && isHome ? 'text-white' : 'text-deep'

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className={`lg:hidden ${textClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl tracking-widest-plus font-semibold"
          style={{ color: !scrolled && isHome ? '#fff' : '#1a1614' }}
        >
          VELMORA
        </Link>

        {/* Center links - desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/shop" className={`text-[13px] tracking-widest uppercase font-medium transition-colors hover:text-gold-500 ${textClass}`}>
            Shop
          </Link>
          <Link to="/shop?category=earrings" className={`text-[13px] tracking-widest uppercase font-medium transition-colors hover:text-gold-500 ${textClass}`}>
            Earrings
          </Link>
          <Link to="/shop?category=necklaces" className={`text-[13px] tracking-widest uppercase font-medium transition-colors hover:text-gold-500 ${textClass}`}>
            Necklaces
          </Link>
          <Link to="/shop?category=huggies" className={`text-[13px] tracking-widest uppercase font-medium transition-colors hover:text-gold-500 ${textClass}`}>
            Huggies
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textClass} transition-colors hover:text-gold-500`} aria-label="Search">
            <Search size={18} />
          </button>
          <button
            className={`relative ${textClass} transition-colors hover:text-gold-500`}
            onClick={openDrawer}
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold-500 text-[10px] font-semibold text-white flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64 border-b border-velvet-200' : 'max-h-0'
        } bg-cream`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {[
            ['Shop', '/shop'],
            ['Earrings', '/shop?category=earrings'],
            ['Necklaces', '/shop?category=necklaces'],
            ['Huggies', '/shop?category=huggies'],
          ].map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-[13px] tracking-widest uppercase font-medium text-deep/80 hover:text-gold-500 transition-colors py-1"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}