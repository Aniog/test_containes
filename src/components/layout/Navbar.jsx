import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
          ? 'bg-warm-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide-30 uppercase font-semibold text-warm-black">
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              className="font-sans text-sm tracking-wide-15 uppercase text-warm-black hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-warm-black hover:text-gold transition-colors duration-300"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={openCart}
            className="p-2 text-warm-black hover:text-gold transition-colors duration-300 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-warm-black text-xs font-semibold w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 md:hidden text-warm-black hover:text-gold transition-colors duration-300"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-warm-cream shadow-md py-4 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <input
              type="text"
              placeholder="Search jewelry..."
              className="w-full bg-transparent border-b border-stone-300 py-2 text-warm-black font-serif text-lg focus:outline-none focus:border-gold placeholder:text-stone-500"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-warm-cream shadow-md py-6 px-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-lg tracking-wide-15 uppercase text-warm-black hover:text-gold transition-colors duration-300"
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
