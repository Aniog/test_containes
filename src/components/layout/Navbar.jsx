import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, setDrawerOpen } = useCart()
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

  const navClass = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    scrolled || !isHome
      ? 'bg-velmora-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
      : 'bg-transparent',
    isHome && !scrolled ? 'text-white' : 'text-velmora-deep',
  ].join(' ')

  const linkClass = 'text-[13px] tracking-[0.1em] uppercase font-sans font-medium hover:opacity-70 transition-opacity'

  return (
    <nav className={navClass}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Mobile hamburger */}
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
          className="font-serif text-2xl tracking-[0.2em] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass}>Shop</Link>
          <Link to="/shop?category=earrings" className={linkClass}>Earrings</Link>
          <Link to="/shop?category=necklaces" className={linkClass}>Necklaces</Link>
          <Link to="/shop?category=sets" className={linkClass}>Sets</Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-1">
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative p-1"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-velmora-gold text-white text-[10px] font-sans font-medium flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-deep/30" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-velmora-cream shadow-2xl p-8 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end p-1"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <Link to="/" className="font-serif text-xl tracking-[0.15em]" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/shop" className={linkClass} onClick={() => setMobileOpen(false)}>Shop All</Link>
            <Link to="/shop?category=earrings" className={linkClass} onClick={() => setMobileOpen(false)}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={linkClass} onClick={() => setMobileOpen(false)}>Necklaces</Link>
            <Link to="/shop?category=sets" className={linkClass} onClick={() => setMobileOpen(false)}>Sets</Link>
            <hr className="border-velmora-sand" />
            <span className="text-xs text-velmora-taupe tracking-wider uppercase">About</span>
            <a href="#" className={linkClass}>Our Story</a>
            <a href="#" className={linkClass}>Journal</a>
            <a href="#" className={linkClass}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
