import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from './CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-warmwhite/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-velmora-charcoal p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav links */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/shop?category=earrings">Earrings</NavLink>
            <NavLink to="/shop?category=necklaces">Necklaces</NavLink>
            <NavLink to="/shop?category=huggies">Huggies</NavLink>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center space-x-5">
            <button className="text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Search">
              <Search size={19} />
            </button>
            <button
              className="relative text-velmora-charcoal hover:text-velmora-gold transition-colors"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag size={19} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] font-sans font-medium w-4.5 h-4.5 rounded-full flex items-center justify-center leading-none">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-velmora-warmwhite/98 backdrop-blur-md border-t border-velmora-mist/40 px-6 py-4 space-y-3">
          <MobileLink to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop All</MobileLink>
          <MobileLink to="/shop?category=earrings" onClick={() => setMobileMenuOpen(false)}>Earrings</MobileLink>
          <MobileLink to="/shop?category=necklaces" onClick={() => setMobileMenuOpen(false)}>Necklaces</MobileLink>
          <MobileLink to="/shop?category=huggies" onClick={() => setMobileMenuOpen(false)}>Huggies</MobileLink>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="font-sans text-xs tracking-wider uppercase text-velmora-taupe hover:text-velmora-charcoal transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block font-sans text-sm tracking-wide text-velmora-charcoal hover:text-velmora-gold transition-colors py-1.5"
    >
      {children}
    </Link>
  )
}