import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Gift Sets' }
    ],
    help: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/sizing', label: 'Ring Sizing' },
      { to: '/care', label: 'Jewelry Care' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact Us' }
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/careers', label: 'Careers' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, to: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, to: 'https://facebook.com', label: 'Facebook' }
  ];

  return (
    <footer style={{ backgroundColor: 'var(--espresso)', color: 'var(--stone)' }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-wide mb-6 block"
              style={{ color: 'var(--cream)', letterSpacing: '0.08em' }}
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--stone)' }}>
              Demi-fine jewelry crafted with intention. Each piece is designed to be treasured, worn, and loved for years to come.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-opacity duration-200 hover:opacity-80"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--cream)' }}>
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold-light)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--cream)' }}>
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold-light)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--cream)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-[var(--gold-light)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(200, 185, 154, 0.2)' }}
        >
          <p className="text-xs" style={{ color: 'var(--stone-dark)' }}>
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: 'var(--stone-dark)' }}>We accept:</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((pmt) => (
                <div
                  key={pmt}
                  className="px-2 py-1 text-xs rounded"
                  style={{ 
                    backgroundColor: 'rgba(200, 185, 154, 0.15)',
                    color: 'var(--stone)'
                  }}
                >
                  {pmt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
