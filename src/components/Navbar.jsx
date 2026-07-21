import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-velmora-charcoal'
    : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-2xl sm:text-3xl tracking-wide-product font-medium transition-colors ${textColor}`}>
              VELMORA
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/shop" className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors hover:text-velmora-gold ${textColor}`}>
                Shop
              </Link>
              <Link to="/shop?category=Sets" className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors hover:text-velmora-gold ${textColor}`}>
                Collections
              </Link>
              <Link to="/about" className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors hover:text-velmora-gold ${textColor}`}>
                About
              </Link>
              <Link to="/journal" className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors hover:text-velmora-gold ${textColor}`}>
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 transition-colors hover:text-velmora-gold ${textColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleDrawer}
                className={`p-2 transition-colors hover:text-velmora-gold relative ${textColor}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center animate-[fadeIn_0.3s_ease]">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="bg-velmora-cream border-t border-velmora-divider px-4 py-3 overlay-enter">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-velmora-muted" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="flex-1 bg-transparent font-sans text-sm text-velmora-charcoal placeholder:text-velmora-muted outline-none"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="text-velmora-muted hover:text-velmora-charcoal">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream pt-20 lg:hidden">
          <div className="flex flex-col items-center gap-8 py-12">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=Sets', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-serif text-2xl tracking-product uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors mobile-menu-item stagger-${i + 1}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
