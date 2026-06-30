import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
            ? 'bg-[var(--velmora-bg)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
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
            <Link to="/" className="font-serif-display text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="nav-link">Shop</Link>
              <Link to="/shop?category=earrings" className="nav-link">Collections</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/journal" className="nav-link">Journal</Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 -mr-2 hover:text-[var(--velmora-accent)] transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 -mr-2 relative hover:text-[var(--velmora-accent)] transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--velmora-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[var(--velmora-bg)] animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-[var(--velmora-border)]">
              <span className="font-serif-display text-xl tracking-wider">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-6">
              <Link to="/shop" className="text-lg font-serif-display" onClick={() => setMobileOpen(false)}>Shop</Link>
              <Link to="/shop?category=earrings" className="text-lg font-serif-display" onClick={() => setMobileOpen(false)}>Collections</Link>
              <Link to="/about" className="text-lg font-serif-display" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/journal" className="text-lg font-serif-display" onClick={() => setMobileOpen(false)}>Journal</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
