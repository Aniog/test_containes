import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Sets' }
    ],
    help: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/care', label: 'Jewelry Care' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact Us' }
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Mail, href: 'mailto:hello@velmora.com', label: 'Email' }
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra uppercase text-velmora-cream">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-velmora-taupe leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Quality pieces designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-velmora-gold">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-velmora-taupe hover:text-velmora-cream transition-colors"
                  >
                    {link.label}
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
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-velmora-taupe hover:text-velmora-cream transition-colors"
                  >
                    {link.label}
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
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-velmora-taupe hover:text-velmora-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="pt-8 border-t border-velmora-taupe/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-taupe">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map((method) => (
                <div
                  key={method}
                  className="px-3 py-1 bg-velmora-taupe/10 rounded text-xs text-velmora-taupe"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}