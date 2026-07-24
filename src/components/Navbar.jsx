import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Shop', path: '/collection' },
    { label: 'Collections', path: '/collection' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-velmora-bg/95 backdrop-blur-md shadow-sm'

  const textColor = isHome && !scrolled
    ? 'text-white'
    : 'text-velmora-text'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <nav className="container-velmora flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className={`font-serif text-xl md:text-2xl font-light tracking-[0.15em] ${textColor}`}>
              VELMORA
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                className={`nav-link ${textColor} hover:opacity-70 transition-opacity`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 ${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
              <Search size={20} />
            </button>
            <button
              onClick={openCart}
              className={`p-2 ${textColor} hover:opacity-70 transition-opacity relative`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-gold text-white text-[10px] font-semibold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-velmora-bg border-b border-velmora-border">
            <div className="container-velmora py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="nav-link text-velmora-text py-2 border-b border-velmora-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
