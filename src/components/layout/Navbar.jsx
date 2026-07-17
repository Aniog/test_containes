import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/#about' },
    { label: 'Journal', path: '/#journal' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-charcoal no-underline">
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              className="text-sm font-sans font-medium tracking-wide text-charcoal hover:text-gold transition-colors duration-300 no-underline uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="text-charcoal hover:text-gold transition-colors duration-300 bg-transparent border-none p-1">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-charcoal hover:text-gold transition-colors duration-300 bg-transparent border-none p-1"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-charcoal hover:text-gold transition-colors duration-300 bg-transparent border-none p-1"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-base font-sans font-medium tracking-wide text-charcoal hover:text-gold transition-colors duration-300 no-underline uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
