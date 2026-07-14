import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { to: '/shop', label: 'All Jewelry' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/sizing', label: 'Ring Sizing' },
    { to: '/care', label: 'Jewelry Care' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/careers', label: 'Careers' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Heart, href: 'https://pinterest.com', label: 'Pinterest' },
  ];

  return (
    <footer className="bg-rich-black text-warm-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warm-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-gray-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in New York, worn everywhere.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray-400 hover:text-champagne transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-champagne mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-warm-gray-400 hover:text-warm-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-champagne mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-warm-gray-400 hover:text-warm-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-champagne mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-warm-gray-400 hover:text-warm-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-warm-gray-900">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-xs text-warm-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-warm-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1z" />
                <path d="M1 10h22" />
              </svg>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-warm-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-gray-500">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              <span className="text-warm-gray-600 text-xs">We accept</span>
              <div className="flex items-center gap-2">
                <div className="w-10 h-6 bg-warm-gray-800 rounded flex items-center justify-center text-xs font-bold text-warm-gray-400">
                  VISA
                </div>
                <div className="w-10 h-6 bg-warm-gray-800 rounded flex items-center justify-center text-xs font-bold text-warm-gray-400">
                  MC
                </div>
                <div className="w-10 h-6 bg-warm-gray-800 rounded flex items-center justify-center text-xs font-bold text-warm-gray-400">
                  AMEX
                </div>
                <div className="w-10 h-6 bg-warm-gray-800 rounded flex items-center justify-center text-xs font-bold text-warm-gray-400">
                  PP
                </div>
                <div className="w-10 h-6 bg-warm-gray-800 rounded flex items-center justify-center text-xs font-bold text-warm-gray-400">
                  APPLE
                </div>
              </div>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-4 text-xs text-warm-gray-500">
              <Link to="/privacy" className="hover:text-warm-ivory transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-warm-ivory transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
