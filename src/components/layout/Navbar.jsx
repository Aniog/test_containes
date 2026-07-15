import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2 text-[#1A1A1A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1
                className={`font-serif text-xl md:text-2xl tracking-widest transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#B8860B] ${
                    scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:text-[#B8860B] ${
                  scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-[#B8860B] ${
                  scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-white'
                }`}
                onClick={() => setCartOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#B8860B] text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E4DF]">
            <nav className="px-6 py-4 space-y-4">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className="block text-sm tracking-widest uppercase text-[#1A1A1A] hover:text-[#B8860B] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
