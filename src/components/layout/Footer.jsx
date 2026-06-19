import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' }
  ];

  const helpLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' }
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest-xl">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-cream/60 text-sm leading-relaxed max-w-sm">
              Crafted to be treasured. We create demi-fine jewelry that bridges 
              the gap between everyday elegance and luxury, designed to be 
              worn and loved for years to come.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hairline bg-velmora-cream/10 mt-12 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-cream/40">
            &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center space-x-3">
            <span className="text-xs text-velmora-cream/40">We accept</span>
            <div className="flex space-x-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <div 
                  key={card}
                  className="px-2 py-1 bg-velmora-cream/10 rounded text-xs text-velmora-cream/60"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}