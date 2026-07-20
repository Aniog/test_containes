import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const navLinks = [
  { name: 'Shop', path: '/collection' },
  { name: 'Collections', path: '/collection' },
  { name: 'About', path: '/' },
  { name: 'Journal', path: '/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden btn-ghost p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop nav - left */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase font-sans font-medium transition-colors duration-300 ${
                    scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest uppercase transition-colors duration-300 ${
                scrolled || !isHome ? 'text-ink' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                className={`btn-ghost p-2 transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`btn-ghost p-2 relative transition-colors duration-300 ${
                  scrolled || !isHome ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="px-4 pb-4 space-y-1 border-t border-border-light">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 text-sm tracking-wider uppercase font-sans font-medium text-ink hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  )
}