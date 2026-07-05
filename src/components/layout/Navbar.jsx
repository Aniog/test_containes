import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../cart/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleDrawer, itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-stone-800'
    : 'text-warm-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${navBg}`}>
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-1 transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-nav font-medium transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : link === 'About' ? '/about' : '/journal'}
                className={`text-xs uppercase tracking-nav font-medium transition-colors hover:text-gold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${textColor}`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-1 transition-colors hover:text-gold ${textColor}`} aria-label="Search">
              <Search className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={toggleDrawer}
              className={`p-1 transition-colors hover:text-gold relative ${textColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-warm-white text-[10px] font-semibold flex items-center justify-center rounded-full animate-[scale-in_0.3s_ease-out]">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-warm-white border-t border-stone-100">
          <div className="px-5 py-6 space-y-4">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : link === 'About' ? '/about' : '/journal'}
                className="block text-sm uppercase tracking-nav font-medium text-stone-800 hover:text-gold transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
