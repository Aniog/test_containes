import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ onCartOpen, onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navClass = scrolled
    ? 'bg-velmora-surface/95 backdrop-blur-md shadow-sm border-b border-velmora-border-light'
    : 'bg-transparent'

  const textClass = scrolled || !isHome
    ? 'text-velmora-text'
    : 'text-white'

  const logoClass = scrolled || !isHome
    ? 'text-velmora-text'
    : 'text-white'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
    >
      <div className="page-container section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0">
            <span
              className={`font-serif text-xl md:text-2xl tracking-[0.25em] font-medium transition-colors duration-500 ${logoClass}`}
            >
              VELMORA
            </span>
          </Link>

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              ['Shop', '/shop'],
              ['Collections', '/shop?category=necklaces'],
              ['About', '/about'],
              ['Journal', '/journal'],
            ].map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-velmora-accent ${textClass}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={onSearchOpen}
              className={`p-1 transition-colors duration-300 hover:text-velmora-accent ${textClass}`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={onCartOpen}
              className={`p-1 transition-colors duration-300 hover:text-velmora-accent relative ${textClass}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-velmora-accent text-white text-[10px] font-medium rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden p-1 transition-colors duration-300 ${textClass}`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-surface border-t border-velmora-border-light animate-in slide-in-from-top-2 duration-200">
          <div className="section-padding py-6 flex flex-col gap-5">
            {[
              ['Shop', '/shop'],
              ['Collections', '/shop?category=necklaces'],
              ['About', '/about'],
              ['Journal', '/journal'],
            ].map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className="text-sm tracking-[0.15em] uppercase font-medium text-velmora-text hover:text-velmora-accent transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}