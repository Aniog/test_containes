import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/shop' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Huggies', href: '/shop?category=huggies' },
      { name: 'Gift Sets', href: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', href: '#' },
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Care Guide', href: '#' },
      { name: 'FAQs', href: '#' }
    ],
    company: [
      { name: 'Our Story', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' }
    ]
  };

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-cream/70 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-cream/50 mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-cream/80 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-cream/50 mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-cream/80 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-cream/50 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-cream/80 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-cream/50 text-xs">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                  <span key={card} className="px-2 py-1 bg-cream/10 text-cream/70 text-xs rounded">
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
}