import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
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

  const navBg = !isHome || scrolled
    ? 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-border'
    : 'bg-transparent'

  const textColor = !isHome || scrolled
    ? 'text-velmora-charcoal'
    : 'text-white'

  const links = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/#about' },
    { label: 'Journal', path: '/#journal' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden ${textColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-2xl lg:text-3xl font-light tracking-wider ${textColor} transition-colors`}>
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-xs tracking-extra-wide uppercase font-medium ${textColor} hover:opacity-70 transition-all duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
                <Search className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button
                onClick={openCart}
                className={`relative ${textColor} hover:opacity-70 transition-opacity`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-6 pt-8">
            {links.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className="text-lg font-serif text-velmora-charcoal tracking-wide"
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
