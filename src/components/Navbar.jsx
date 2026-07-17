import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  const navLink = 'text-xs tracking-widest uppercase font-sans transition-colors duration-300 hover:text-velmora-gold'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent text-white'
            : 'bg-velmora-ivory/95 backdrop-blur-sm text-velmora-charcoal border-b border-velmora-border/60 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-widest font-medium"
            >
              VELMORA
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={navLink}>
                Shop
              </Link>
              <Link to="/shop" className={navLink}>
                Collections
              </Link>
              <Link to="/" className={navLink}>
                About
              </Link>
              <Link to="/" className={navLink}>
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="p-2 hover:text-velmora-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Cart"
                className="p-2 hover:text-velmora-gold transition-colors relative"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-72 bg-velmora-ivory h-full shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-widest">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' || item === 'Collections' ? '/shop' : '/'}
                  className="text-sm tracking-widest uppercase font-sans text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
