import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount } = useCart()
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

  const navClass = scrolled || !isHome
    ? 'bg-surface/95 backdrop-blur-md border-b border-border'
    : 'bg-transparent'

  const textClass = scrolled || !isHome ? 'text-base' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/shop" className={textClass}>Shop</NavLink>
              <NavLink to="/shop?category=earrings" className={textClass}>Earrings</NavLink>
              <NavLink to="/shop?category=necklaces" className={textClass}>Necklaces</NavLink>
              <NavLink to="/shop?category=sets" className={textClass}>Sets</NavLink>
            </div>

            {/* Logo - center */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <span className={`font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-semibold ${textClass}`}>
                Velmora
              </span>
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                className={`p-2 ${textClass} hover:text-accent transition-colors`}
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                className={`p-2 relative ${textClass} hover:text-accent transition-colors`}
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? 'max-h-16 border-b border-border' : 'max-h-0'}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full pl-10 pr-4 py-2 bg-transparent border-b border-border text-base placeholder:text-muted/60 font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                autoFocus={searchOpen}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-base/60" onClick={() => setMobileOpen(false)} />
        <div className="absolute top-0 right-0 w-72 h-full bg-surface shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-serif text-lg uppercase tracking-[0.2em]">Velmora</span>
            <button onClick={() => setMobileOpen(false)} className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="py-6 px-4 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink to="/shop" onClick={() => setMobileOpen(false)}>Shop All</MobileLink>
            <MobileLink to="/shop?category=earrings" onClick={() => setMobileOpen(false)}>Earrings</MobileLink>
            <MobileLink to="/shop?category=necklaces" onClick={() => setMobileOpen(false)}>Necklaces</MobileLink>
            <MobileLink to="/shop?category=sets" onClick={() => setMobileOpen(false)}>Sets</MobileLink>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

function NavLink({ to, children, className }) {
  return (
    <Link
      to={to}
      className={`font-sans text-xs uppercase tracking-[0.08em] font-medium hover:text-accent transition-colors ${className}`}
    >
      {children}
    </Link>
  )
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center justify-between px-2 py-3 font-sans text-sm uppercase tracking-[0.08em] text-base hover:text-accent transition-colors border-b border-border/50"
    >
      {children}
      <ChevronRight className="w-4 h-4 text-muted" />
    </Link>
  )
}
