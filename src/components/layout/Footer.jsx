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
      { name: 'Care Instructions', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Size Guide', href: '#' }
    ],
    company: [
      { name: 'Our Story', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' }
    ]
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-soft border-t border-velmora-border">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-velmora-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Premium demi-fine jewelry crafted to be treasured. Every piece tells a story.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-medium text-velmora-white uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-medium text-velmora-white uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium text-velmora-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-velmora-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-velmora-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <div 
                key={icon}
                className="px-2 py-1 bg-velmora-surface text-xs text-velmora-muted rounded"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}