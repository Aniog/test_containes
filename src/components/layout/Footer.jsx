import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'All Products', path: '/shop' },
    ],
    help: [
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
    ],
  };

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest-xl text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-taupe text-sm leading-relaxed max-w-sm">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-velmora-taupe text-sm hover:text-velmora-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-velmora-taupe text-sm hover:text-velmora-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-velmora-taupe text-sm hover:text-velmora-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-velmora-taupe text-xs">We accept</span>
            <div className="flex space-x-2">
              {['Visa', 'MC', 'Amex', 'Apple Pay'].map((card) => (
                <span
                  key={card}
                  className="px-2 py-1 bg-velmora-taupe/20 text-velmora-taupe text-xs rounded"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
          <p className="text-velmora-taupe text-xs">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}