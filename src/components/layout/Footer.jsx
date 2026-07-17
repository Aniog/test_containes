import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', href: '/collection' },
      { label: 'Earrings', href: '/collection?category=earrings' },
      { label: 'Necklaces', href: '/collection?category=necklaces' },
      { label: 'Huggies', href: '/collection?category=huggies' },
      { label: 'Gift Sets', href: '/collection?category=sets' },
    ],
    help: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Care Instructions', href: '/care' },
      { label: 'FAQ', href: '/faq' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Heart, href: 'https://pinterest.com', label: 'Pinterest' },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/70 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be 
              treasured, combining timeless elegance with accessible luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory/50 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory/50">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment Icons - Simplified SVG representations */}
              <div className="flex items-center gap-2 text-ivory/50">
                <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="currentColor">
                  <rect width="38" height="24" rx="3" />
                  <text x="19" y="15" textAnchor="middle" fontSize="8" fill="#1C1C1C">VISA</text>
                </svg>
                <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="currentColor">
                  <rect width="38" height="24" rx="3" />
                  <text x="19" y="15" textAnchor="middle" fontSize="6" fill="#1C1C1C">MC</text>
                </svg>
                <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="currentColor">
                  <rect width="38" height="24" rx="3" />
                  <text x="19" y="15" textAnchor="middle" fontSize="6" fill="#1C1C1C">AMEX</text>
                </svg>
                <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="currentColor">
                  <rect width="38" height="24" rx="3" />
                  <text x="19" y="15" textAnchor="middle" fontSize="6" fill="#1C1C1C">PayPal</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
