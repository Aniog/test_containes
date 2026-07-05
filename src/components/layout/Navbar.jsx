import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
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

  const navBg = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white'

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-20 h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-wide-xl ${textColor} no-underline hover:opacity-80 transition-opacity`}
        >
          VELMORA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans text-xs tracking-widest uppercase ${textColor} no-underline hover:opacity-60 transition-opacity`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`p-0 bg-transparent border-none ${textColor} hover:opacity-60 transition-opacity cursor-pointer`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={() => setIsOpen(true)}
            className={`relative p-0 bg-transparent border-none ${textColor} hover:opacity-60 transition-opacity cursor-pointer`}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-0 bg-transparent border-none ${textColor} hover:opacity-60 transition-opacity cursor-pointer`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-warm animate-fade-in">
          <div className="flex flex-col py-6 px-5 gap-4">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-sm tracking-widest uppercase text-brand-charcoal no-underline py-2 hover:text-brand-gold transition-colors"
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
