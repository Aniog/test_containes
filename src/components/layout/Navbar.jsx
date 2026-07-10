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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
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

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-brand-charcoal'
    : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 section-padding">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-1 transition-colors duration-300 ${textColor}`}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`} />
          </div>
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-wider font-semibold transition-colors duration-500 ${textColor}`}
        >
          VELMORA
        </Link>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-brand-gold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-1 transition-colors duration-300 hover:text-brand-gold ${textColor}`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`p-1 relative transition-colors duration-300 hover:text-brand-gold ${textColor}`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center animate-[scale-in_0.3s_ease-out]">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand-cream border-t border-brand-warm-border/40">
          <div className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm tracking-[0.15em] uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
                  transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms',
                  transitionDuration: '300ms',
                }}
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
