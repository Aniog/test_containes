import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgClass =
    !isHome || scrolled
      ? 'bg-vbg/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'

  const textClass =
    !isHome || scrolled ? 'text-vtext' : 'text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textClass}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-medium tracking-[0.15em] ${textClass}`}
          >
            VELMORA
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/shop"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-60 ${textClass}`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-60 ${textClass}`}
            >
              Collections
            </Link>
            <Link
              to="/"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-60 ${textClass}`}
            >
              About
            </Link>
            <Link
              to="/"
              className={`font-sans text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-60 ${textClass}`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden md:flex ${textClass} transition-opacity hover:opacity-60`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className={`relative ${textClass} transition-opacity hover:opacity-60`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-vgold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-vbg pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 mt-8">
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm font-medium tracking-widest uppercase text-vtext"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm font-medium tracking-widest uppercase text-vtext"
            >
              Collections
            </Link>
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm font-medium tracking-widest uppercase text-vtext"
            >
              About
            </Link>
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm font-medium tracking-widest uppercase text-vtext"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
