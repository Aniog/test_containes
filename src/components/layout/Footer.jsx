import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

// Custom Pinterest Icon
const Pinterest = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/collections?category=earrings', label: 'Earrings' },
      { to: '/collections?category=necklaces', label: 'Necklaces' },
      { to: '/collections?category=huggies', label: 'Huggies' },
      { to: '/collections?category=sets', label: 'Gift Sets' },
    ],
    help: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact Us' },
      { to: '/size-guide', label: 'Size Guide' },
      { to: '/care-guide', label: 'Jewelry Care' },
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
      { to: '/careers', label: 'Careers' },
    ],
  };

  const socialLinks = [
    { to: 'https://instagram.com', label: 'Instagram', icon: Instagram },
    { to: 'https://facebook.com', label: 'Facebook', icon: Facebook },
    { to: 'https://pinterest.com', label: 'Pinterest', icon: Pinterest },
  ];

  const paymentIcons = ['Visa', ' Mastercard', ' Amex', ' PayPal', ' Apple Pay'];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-stone text-body-sm leading-relaxed max-w-sm">
              Handcrafted demi-fine jewelry designed to be treasured. Each piece is made with 
              18K gold plating and hypoallergenic materials for everyday elegance.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-stone hover:text-gold transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-overline text-stone mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone hover:text-gold transition-colors duration-200 text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-overline text-stone mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone hover:text-gold transition-colors duration-200 text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-overline text-stone mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone hover:text-gold transition-colors duration-200 text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light/20">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-stone text-caption">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-2 py-1 bg-charcoal-light/30 rounded text-caption text-stone"
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-stone hover:text-gold transition-colors text-caption">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-stone hover:text-gold transition-colors text-caption">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
