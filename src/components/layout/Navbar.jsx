import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#newsletter' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
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

  const navBg = scrolled || !isHome
    ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal-800' : 'text-charcoal-800'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 -ml-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Left nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`${textColor} text-xs font-sans font-medium tracking-widest uppercase hover:text-gold-500 transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-medium tracking-widest ${textColor} hover:text-gold-500 transition-colors duration-300`}
            style={{ letterSpacing: '0.3em' }}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              className={`${textColor} hover:text-gold-500 transition-colors duration-300`}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={toggleCart}
              className={`relative ${textColor} hover:text-gold-500 transition-colors duration-300`}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-white text-[10px] font-sans font-semibold w-4.5 h-4.5 rounded-full flex items-center justify-center min-w-[18px] min-h-[18px]">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-cream-50 border-b border-charcoal-100 animate-slide-down shadow-lg">
            <div className="flex flex-col py-6 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-sans font-medium tracking-widest uppercase text-charcoal-700 hover:text-gold-500 transition-colors border-b border-charcoal-50 last:border-0"
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
