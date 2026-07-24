import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from './context/CartContext'
import CartDrawer from './components/ui/CartDrawer'

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isCartOpen, setIsCartOpen, totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="serif-heading text-2xl md:text-3xl tracking-wider"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-primary transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container-padding py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Logo Column */}
            <div className="md:col-span-1">
              <h3 className="serif-heading text-2xl tracking-wider mb-4">
                VELMORA
              </h3>
              <p className="text-sm text-background/60 leading-relaxed">
                Demi-fine jewelry crafted with care. Timeless pieces for the modern woman.
              </p>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="text-sm tracking-wider uppercase mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="text-sm text-background/60 hover:text-background transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=earrings" className="text-sm text-background/60 hover:text-background transition-colors">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=necklaces" className="text-sm text-background/60 hover:text-background transition-colors">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=huggies" className="text-sm text-background/60 hover:text-background transition-colors">
                    Huggies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="text-sm tracking-wider uppercase mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-sm tracking-wider uppercase mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="text-sm text-background/60 hover:text-background transition-colors">
                    Journal
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment Icons Placeholder */}
              <div className="flex items-center gap-2 text-xs text-background/40">
                <span>Visa</span>
                <span>·</span>
                <span>Mastercard</span>
                <span>·</span>
                <span>Amex</span>
                <span>·</span>
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  )
}
