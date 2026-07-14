import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop', match: '/shop' },
  { to: '/shop', label: 'Collections', match: '/shop' },
  { to: '/about', label: 'About', match: '/about' },
  { to: '/journal', label: 'Journal', match: '/journal' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-charcoal/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const isActive = (matchPath) => {
    if (matchPath === '/shop') return location.pathname === '/shop' || location.pathname.startsWith('/product')
    return location.pathname === matchPath
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-semibold tracking-logo text-white transition-colors"
        >
          VELMORA
        </Link>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-xs font-sans font-medium tracking-nav uppercase text-white hover:text-gold-light transition-colors duration-200 relative ${
                isActive(link.match) ? 'text-gold-light' : ''
              }`}
            >
              {link.label}
              {isActive(link.match) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-light" />
              )}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-gold-light transition-colors duration-200" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative text-white hover:text-gold-light transition-colors duration-200"
            onClick={toggleDrawer}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-charcoal/98 backdrop-blur-md border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-sans font-medium tracking-nav uppercase transition-colors ${
                isActive(link.match) ? 'text-gold-light' : 'text-white hover:text-gold-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
