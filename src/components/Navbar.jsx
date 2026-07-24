import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  const bgClass = scrolled || !isHome || mobileOpen
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textClass = scrolled || !isHome || mobileOpen
    ? 'text-velmora-dark'
    : 'text-velmora-warmWhite'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className={`font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.15em] font-semibold ${textClass} transition-colors duration-500`}>
          VELMORA
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans text-sm tracking-[0.1em] uppercase ${textClass} hover:text-velmora-gold transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className={`${textClass} hover:text-velmora-gold transition-colors duration-300`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`${textClass} hover:text-velmora-gold transition-colors duration-300 relative`}
            aria-label={`Cart${totalItems > 0 ? ` (${totalItems} items)` : ''}`}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-velmora-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className={`md:hidden ${textClass} hover:text-velmora-gold transition-colors duration-300`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 ease-out ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-velmora-cream border-t border-velmora-hairline">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
