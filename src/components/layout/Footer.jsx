import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Size Guide', path: '/size-guide' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
    ],
  };

  const paymentIcons = ['visa', 'mastercard', 'amex', 'paypal', 'applepay'];

  return (
    <footer className="bg-charcoal text-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-warmWhite">
                VELMORA
              </Link>
              <p className="mt-4 text-sm text-warmWhite/60 leading-relaxed max-w-xs">
                Crafted with intention, designed for the modern woman. Demi-fine jewelry that celebrates everyday moments.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warmWhite/60 hover:text-gold-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warmWhite/60 hover:text-gold-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warmWhite/60 hover:text-gold-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="font-serif text-sm tracking-extra-wide uppercase mb-4">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-sm text-warmWhite/60 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="font-serif text-sm tracking-extra-wide uppercase mb-4">Help</h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-sm text-warmWhite/60 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-serif text-sm tracking-extra-wide uppercase mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-sm text-warmWhite/60 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warmWhite/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warmWhite/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-warmWhite/40">We accept</span>
              <div className="flex items-center gap-3">
                {paymentIcons.map((icon) => (
                  <div 
                    key={icon}
                    className="w-8 h-5 bg-warmWhite/10 rounded flex items-center justify-center"
                  >
                    <span className="text-[8px] text-warmWhite/60 uppercase">
                      {icon === 'applepay' ? 'pay' : icon.slice(0, 4)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
