import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    shop: [
      { label: 'All Jewelry', href: '/collections/all' },
      { label: 'Earrings', href: '/collections/earrings' },
      { label: 'Necklaces', href: '/collections/necklaces' },
      { label: 'Huggies', href: '/collections/huggies' },
      { label: 'Gift Sets', href: '/collections/sets' },
    ],
    help: [
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Care Instructions', href: '/care' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
    ],
  };
  
  const paymentIcons = [
    { name: 'Visa', path: 'M9.5 8.5l2-5h1.5l-2 5h-1.5zm5.5 0l2-5h1.5l-2 5H15z' },
    { name: 'Mastercard', path: 'M12 4.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5S16.14 4.5 12 4.5zm0 12c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z' },
    { name: 'Amex', path: 'M3 8.5h18v7H3v-7zm0-3h18v2H3V5.5z' },
    { name: 'PayPal', path: 'M7.5 6.5c0-1.38 1.12-2.5 2.5-2.5h6c1.38 0 2.5 1.12 2.5 2.5v1c0 1.38-1.12 2.5-2.5 2.5h-4l-1 4H8.5l-1-4.5V6.5z' },
  ];
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
              Timeless demi-fine jewelry crafted with intention. Every piece designed to become a treasured part of your story.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-white/50">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                  title={icon.name}
                >
                  <span className="text-xs font-medium text-white/70">
                    {icon.name.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-white/50">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
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
