import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleDrawer } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm border-b border-velmora-sand/50'
    : 'bg-transparent'
  const textColor = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 -ml-2 ${textColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl sm:text-2xl tracking-ultra-wide font-medium ${textColor} transition-colors lg:flex-none`}
            >
              VELMORA
            </Link>

            {/* Center links - desktop */}
            <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {[
                { to: '/collection', label: 'Shop' },
                { to: '/collection', label: 'Collections' },
                { to: '/', label: 'About' },
                { to: '/', label: 'Journal' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:text-velmora-gold transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button className={`p-2 ${textColor} hover:text-velmora-gold transition-colors`} aria-label="Search">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleDrawer}
                className={`p-2 relative ${textColor} hover:text-velmora-gold transition-colors`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-medium w-4.5 h-4.5 flex items-center justify-center rounded-full min-w-[18px] min-h-[18px]">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-velmora-cream/98 backdrop-blur-lg border-t border-velmora-sand/40 px-6 py-6 space-y-4">
            {[
              { to: '/collection', label: 'Shop' },
              { to: '/collection', label: 'Collections' },
              { to: '/', label: 'About' },
              { to: '/', label: 'Journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm tracking-widest uppercase font-sans font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
