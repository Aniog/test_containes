import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

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
      { name: 'Shipping & Returns', path: '/shipping-returns' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQ', path: '/faq' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8" style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-cream)' }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-[0.2em] inline-block mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed">
              Premium demi-fine jewelry crafted to be treasured. Every piece tells a story of elegance and timeless beauty.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                    style={{ color: 'rgba(250, 248, 245, 0.7)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
              HELP
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                    style={{ color: 'rgba(250, 248, 245, 0.7)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                    style={{ color: 'rgba(250, 248, 245, 0.7)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 mb-8" style={{ backgroundColor: 'rgba(250, 248, 245, 0.1)' }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-cream/50" style={{ color: 'rgba(250, 248, 245, 0.5)' }}>
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                style={{ color: 'rgba(250, 248, 245, 0.5)' }}
                aria-label={social.label}
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Payment Icons Placeholder */}
          <div className="flex items-center gap-2 text-cream/30 text-xs" style={{ color: 'rgba(250, 248, 245, 0.3)' }}>
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Amex</span>
            <span>·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}