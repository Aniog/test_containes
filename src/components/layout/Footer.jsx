import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' },
    { name: 'Gift Sets', href: '/shop?category=sets' },
  ];

  const helpLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'FAQ', href: '/faq' },
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  ];

  const paymentIcons = [
    { name: 'Visa', path: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h2v2H8V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8z' },
    { name: 'Mastercard', path: 'M12 4C7.6 4 4 7.6 4 12s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z' },
    { name: 'Amex', path: 'M3 5h18v14H3V5zm2 2v10h14V7H5z' },
  ];

  return (
    <footer className="bg-charcoal text-warm-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-ultra uppercase text-warm-white hover:text-gold-400 transition-colors"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-warm-white/70 font-sans leading-relaxed max-w-sm">
              Handcrafted demi-fine gold jewelry for the modern woman. 
              Each piece is designed to be treasured, combining timeless elegance 
              with everyday wearability.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-warm-white/70 hover:text-gold-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-sm tracking-ultra uppercase text-warm-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-warm-white/70 hover:text-gold-400 transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-serif text-sm tracking-ultra uppercase text-warm-white mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-warm-white/70 hover:text-gold-400 transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-sm tracking-ultra uppercase text-warm-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-warm-white/70 hover:text-gold-400 transition-colors font-sans"
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
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-warm-white/50 font-sans">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-xs text-warm-white/50 hover:text-warm-white transition-colors font-sans"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-xs text-warm-white/50 hover:text-warm-white transition-colors font-sans"
              >
                Terms of Service
              </Link>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-8 h-5 bg-warm-white/10 rounded flex items-center justify-center"
                  title={icon.name}
                >
                  <svg
                    className="w-5 h-3.5 text-warm-white/70"
                    viewBox="0 0 24 16"
                    fill="currentColor"
                  >
                    <rect width="24" height="16" rx="2" />
                  </svg>
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
