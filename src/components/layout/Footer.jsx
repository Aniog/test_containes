import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' }
  ];

  const helpLinks = [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' }
  ];

  return (
    <footer className="bg-charcoal border-t border-stone/50">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-warm-gray text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-stone text-warm-gray hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-stone text-warm-gray hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-stone text-warm-gray hover:border-gold hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-warm-gray hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-warm-gray hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-warm-gray hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-warm-gray">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-warm-gray">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                  <span 
                    key={card}
                    className="px-2 py-1 bg-stone/30 text-xs text-warm-gray rounded"
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;