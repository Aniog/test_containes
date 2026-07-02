import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()
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

  const navBg = scrolled || !isHome
    ? 'bg-velmora-surface/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome
    ? 'text-velmora-warm'
    : 'text-white'

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=Earrings', label: 'Earrings' },
    { to: '/shop?category=Necklaces', label: 'Necklaces' },
    { to: '/shop?category=Huggies', label: 'Huggies' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest whitespace-nowrap ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor}/80 hover:${textColor} transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-5 ${textColor}`}>
            <button className="hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative hover:opacity-70 transition-opacity"
              onClick={toggleDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 bg-velmora-surface/98 backdrop-blur-md' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm tracking-widest uppercase font-sans text-velmora-warm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}