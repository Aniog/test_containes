import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled
    ? 'bg-charcoal/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-charcoal'

  const textColor = 'text-white'
  const hoverColor = 'hover:text-champagne'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-8xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${textColor} ${hoverColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-[0.15em] ${textColor} ${hoverColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs tracking-[0.15em] uppercase ${textColor} ${hoverColor} transition-colors duration-300 font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} ${hoverColor} transition-colors`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={`relative ${textColor} ${hoverColor} transition-colors`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-champagne text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-4 h-16">
          <span className="font-serif text-2xl tracking-[0.15em] text-white">VELMORA</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-champagne transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-white text-lg tracking-[0.2em] uppercase font-serif hover:text-champagne transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav
