import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, isCartOpen, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' }
  ]

  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`nav ${isScrolled || !isHome ? 'nav-solid' : 'nav-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#2C2823]">
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em]">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-[#B8976D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#B8976D] transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-[#B8976D] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B8976D] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4 text-sm tracking-[0.1em]">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className={isHome ? '' : 'pt-20'}>
        {children}
      </main>

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Footer */}
      <footer className="bg-[#2C2823] text-[#F8F5F1] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="font-serif text-xl tracking-[0.2em] mb-6">VELMORA</div>
            </div>
            
            <div>
              <div className="text-xs tracking-[0.15em] mb-4 text-[#A39B8F]">SHOP</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#B8976D]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#B8976D]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#B8976D]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#B8976D]">Huggies</Link>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.15em] mb-4 text-[#A39B8F]">HELP</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B8976D]">Shipping</a>
                <a href="#" className="block hover:text-[#B8976D]">Returns</a>
                <a href="#" className="block hover:text-[#B8976D]">Care Guide</a>
                <a href="#" className="block hover:text-[#B8976D]">Contact</a>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.15em] mb-4 text-[#A39B8F]">COMPANY</div>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-[#B8976D]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#B8976D]">Journal</Link>
                <a href="#" className="block hover:text-[#B8976D]">Sustainability</a>
                <a href="#" className="block hover:text-[#B8976D]">Wholesale</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A39B8F]">
            <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
            <div>Visa • Mastercard • Amex • Apple Pay</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout