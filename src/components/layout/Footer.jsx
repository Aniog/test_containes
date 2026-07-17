import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/collection' },
    { name: 'Earrings', path: '/collection?category=earrings' },
    { name: 'Necklaces', path: '/collection?category=necklaces' },
    { name: 'Huggies', path: '/collection?category=huggies' },
    { name: 'Gift Sets', path: '/collection?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Ring Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ],
  company: [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, path: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
  { name: 'Pinterest', icon: Pinterest, path: 'https://pinterest.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-ultra-wide font-semibold text-white">
                VELMORA
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Demi-fine jewelry crafted for life's most meaningful moments. 
              18K gold-plated pieces designed to be treasured.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase text-white/40 mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase text-white/40 mb-6">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase text-white/40 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
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
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium tracking-wide text-white/70">
                VISA
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium tracking-wide text-white/70">
                Mastercard
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium tracking-wide text-white/70">
                Amex
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium tracking-wide text-white/70">
                PayPal
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link to="/accessibility" className="hover:text-white/70 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
