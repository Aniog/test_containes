import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wider ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs tracking-widest uppercase ${textColor} hover:text-accent transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-accent transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`${textColor} hover:text-accent transition-colors relative`}
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream">
          <div className="flex items-center justify-between px-4 h-16">
            <span className="font-serif text-2xl font-light tracking-wider text-charcoal">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-16">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-charcoal hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
