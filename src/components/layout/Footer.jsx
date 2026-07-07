import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

// Custom Pinterest-like icon (since Lucide doesn't have Pinterest)
const PinterestIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { href: '/shop', label: 'All Jewelry' },
    { href: '/shop?category=earrings', label: 'Earrings' },
    { href: '/shop?category=necklaces', label: 'Necklaces' },
    { href: '/shop?category=huggies', label: 'Huggies' },
    { href: '/shop?category=sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { href: '/shipping', label: 'Shipping & Returns' },
    { href: '/sizing', label: 'Ring Sizing' },
    { href: '/care', label: 'Jewelry Care' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const companyLinks = [
    { href: '/about', label: 'Our Story' },
    { href: '/journal', label: 'Journal' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/careers', label: 'Careers' },
  ];

  const paymentIcons = ['visa', 'mastercard', 'amex', 'paypal'];

  return (
    <footer className="bg-espresso-900 text-white">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Each piece is designed to become a cherished part of your personal story.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-gold">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                >
                  <span className="text-[10px] text-white/60 uppercase">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
