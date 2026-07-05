import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=set' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolid = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? 'bg-background border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav left */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  showSolid ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl md:text-3xl font-serif tracking-[0.15em] transition-colors ${
              showSolid ? 'text-foreground' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop nav right */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  showSolid ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors hover:text-primary ${
                showSolid ? 'text-foreground' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative p-2 transition-colors hover:text-primary ${
                showSolid ? 'text-foreground' : 'text-white'
              }`}
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className={`px-4 pb-4 border-t ${showSolid ? 'border-border' : 'border-white/20'}`}>
          <nav className="flex flex-col gap-3 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm tracking-widest uppercase ${
                  showSolid ? 'text-foreground' : 'text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}