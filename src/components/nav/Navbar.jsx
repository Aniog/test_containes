import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/cart/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop/earrings', label: 'Earrings' },
  { to: '/shop/necklaces', label: 'Necklaces' },
  { to: '/shop/huggies', label: 'Huggies' },
]

export default function Navbar({ onCartClick, onSearchClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,36,32,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2 text-espresso"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-sans font-medium">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-gold ${
                    isActive ? 'text-gold' : 'text-taupe'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              onClick={onSearchClick}
              className="p-1 text-taupe hover:text-espresso transition-colors"
              aria-label="Search"
            >
              <Search size={19} />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-1 text-taupe hover:text-espresso transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-cream text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Logo — centered, overlaid */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.2em] text-espresso hover:text-gold transition-colors whitespace-nowrap"
          >
            VELMORA
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-taupe-light/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-taupe hover:text-espresso transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
