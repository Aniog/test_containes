import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' }
  ];

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-velmora-cream shadow-soft'
            : location.pathname === '/'
            ? 'bg-transparent'
            : 'bg-velmora-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-widest ${
                isScrolled || location.pathname !== '/'
                  ? 'text-velmora-soft-black'
                  : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors ${
                    isScrolled || location.pathname !== '/'
                      ? 'text-velmora-charcoal hover:text-velmora-gold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <Search size={20} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-charcoal hover:text-velmora-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-velmora-charcoal'
                    : 'text-white/90'
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-velmora-cream border-t border-velmora-taupe/30">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-velmora-charcoal hover:text-velmora-gold text-sm tracking-wide py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-velmora-soft-black text-velmora-warm-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <h3 className="font-serif text-2xl tracking-widest text-white mb-4">VELMORA</h3>
              <p className="text-sm text-velmora-warm-gray leading-relaxed">
                Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-4 text-velmora-gold-light">
                Shop
              </h4>
              <ul className="space-y-2">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-4 text-velmora-gold-light">
                Help
              </h4>
              <ul className="space-y-2">
                {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-4 text-velmora-gold-light">
                Company
              </h4>
              <ul className="space-y-2">
                {['Our Story', 'Sustainability', 'Press', 'Wholesale', 'Gift Cards'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-velmora-warm-gray hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-velmora-graphite/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-velmora-warm-gray">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-velmora-warm-gray hover:text-velmora-gold-light transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
