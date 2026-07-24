import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from './context/CartContext'
import CartDrawer from './components/cart/CartDrawer'

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, isCartOpen, openCart, closeCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${scrolled ? 'text-velmora-base' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${scrolled ? 'text-velmora-base' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-velmora-base' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-velmora-gold ${
                    scrolled ? 'text-velmora-base' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled ? 'text-velmora-base' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled ? 'text-velmora-base' : 'text-white'
                }`}
                onClick={openCart}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-velmora-base text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-velmora-cream/95 backdrop-blur-md border-t border-velmora-warm/30">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-sans text-sm tracking-widest uppercase text-velmora-base hover:text-velmora-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-velmora-base text-velmora-cream/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-cream">
                VELMORA
              </Link>
              <p className="mt-4 text-sm text-velmora-muted-light leading-relaxed">
                Demi-fine gold jewelry crafted to be treasured.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
                Shop
              </h4>
              <ul className="space-y-3">
                {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
                Help
              </h4>
              <ul className="space-y-3">
                {['Shipping Info', 'Returns', 'Size Guide', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-velmora-gold transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {['Our Story', 'Sustainability', 'Journal', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-velmora-gold transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-velmora-charcoal">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-velmora-muted">
                &copy; 2026 Velmora Fine Jewelry. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                {/* Payment icons placeholder */}
                <div className="flex items-center gap-2 text-velmora-muted text-xs">
                  <span>Visa</span>
                  <span>MC</span>
                  <span>Amex</span>
                  <span>PayPal</span>
                </div>
              </div>
              {/* Social links */}
              <div className="flex items-center gap-4">
                {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}
