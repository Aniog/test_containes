import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from './CartDrawer';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Shop', href: '/collection' },
    { label: 'Collections', href: '/collection?category=all' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ];

  const solidBg = scrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidBg
            ? 'bg-ivory/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 -ml-2 text-charcoal"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Left links (desktop) */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl lg:text-2xl font-medium tracking-ultra-wide text-charcoal absolute left-1/2 -translate-x-1/2"
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-1 lg:gap-2">
              <button
                type="button"
                className="p-2 text-charcoal hover:text-gold transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                type="button"
                className="p-2 text-charcoal hover:text-gold transition-colors duration-300 relative"
                aria-label={`Cart, ${itemCount} items`}
                onClick={toggleCart}
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gold text-charcoal text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Right links (desktop) */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Secondary">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-richBlack/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-ivory pt-20 pb-8 px-6 animate-slide-down">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-serif text-2xl font-light text-charcoal uppercase tracking-extra-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hairline mt-8 mb-6" />
            <p className="font-sans text-xs text-warmGray-500 uppercase tracking-extra-wide">
              Free Worldwide Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
}

export function Footer() {
  const columns = [
    {
      heading: 'Shop',
      links: [
        { label: 'All Jewelry', href: '/collection' },
        { label: 'Earrings', href: '/collection?category=earrings' },
        { label: 'Necklaces', href: '/collection?category=necklaces' },
        { label: 'Huggies', href: '/collection?category=huggies' },
        { label: 'Gift Sets', href: '/collection?category=sets' },
      ],
    },
    {
      heading: 'Help',
      links: [
        { label: 'Shipping & Returns', href: '/shipping' },
        { label: 'Size Guide', href: '/size-guide' },
        { label: 'Care Instructions', href: '/care' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Journal', href: '/journal' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Press', href: '/press' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-medium tracking-ultra-wide text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-warmGray-300 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Each piece is designed to be treasured — by you or someone you love.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {[
                { label: 'Instagram', icon: 'IG' },
                { label: 'Pinterest', icon: 'PI' },
                { label: 'TikTok', icon: 'TK' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-warmGray-700 rounded-full flex items-center justify-center
                             text-xs font-medium text-warmGray-400 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-ivory mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-warmGray-400 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline border-warmGray-800 mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-warmGray-600">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((pay) => (
              <span
                key={pay}
                className="px-2 py-1 bg-warmGray-800 text-warmGray-500 text-[10px] font-medium rounded"
              >
                {pay}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
