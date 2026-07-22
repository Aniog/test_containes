import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { footerLinks } from '../../data/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warmgray leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated pieces for everyday luxury.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray hover:text-gold-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray hover:text-gold-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray hover:text-gold-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray hover:text-gold-400 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-ivory mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-warmgray hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-ivory mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-warmgray hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-ivory mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-warmgray hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-ivory mb-4">
              Stay Connected
            </h4>
            <p className="text-sm text-warmgray mb-4">
              Join for 10% off your first order plus exclusive access to new arrivals.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border border-warmgray/30 px-4 py-3 text-sm text-ivory placeholder:text-warmgray/50 focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-espresso px-4 py-3 text-xs uppercase tracking-wider font-medium transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warmgray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warmgray">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-xs text-warmgray">We accept</span>
              <div className="flex items-center space-x-3">
                <div className="px-2 py-1 bg-ivory/10 rounded text-xs font-medium text-warmgray">
                  VISA
                </div>
                <div className="px-2 py-1 bg-ivory/10 rounded text-xs font-medium text-warmgray">
                  MC
                </div>
                <div className="px-2 py-1 bg-ivory/10 rounded text-xs font-medium text-warmgray">
                  AMEX
                </div>
                <div className="px-2 py-1 bg-ivory/10 rounded text-xs font-medium text-warmgray">
                  PayPal
                </div>
                <div className="px-2 py-1 bg-ivory/10 rounded text-xs font-medium text-warmgray">
                  Apple Pay
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-xs text-warmgray hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-warmgray hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
