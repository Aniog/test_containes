import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/sizing' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest-xl text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-velmora-cream/60 leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2 border border-velmora-cream/20 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-sans text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-sans text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-sans text-sm text-velmora-cream/60 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-velmora-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-velmora-cream/40">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {paymentIcons.map((icon) => (
                <span 
                  key={icon} 
                  className="font-sans text-xs text-velmora-cream/40 px-2 py-1 border border-velmora-cream/10 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}