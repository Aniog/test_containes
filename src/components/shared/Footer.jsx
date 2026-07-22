import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Jewelry', to: '/shop' },
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
        { label: 'Gift Sets', to: '/shop?category=sets' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & Returns', to: '/shipping' },
        { label: 'Size Guide', to: '/size-guide' },
        { label: 'Care Instructions', to: '/care' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Contact Us', to: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', to: '/about' },
        { label: 'Sustainability', to: '/sustainability' },
        { label: 'Press', to: '/press' },
        { label: 'Careers', to: '/careers' },
        { label: 'Privacy Policy', to: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl tracking-[0.2em] uppercase font-light text-ivory"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-mist leading-relaxed mt-4 max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-mist hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-mist hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-mist hover:text-gold transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-inter text-xs uppercase tracking-[0.15em] text-ivory mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-inter text-xs text-mist hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-mist">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="font-inter text-[9px] uppercase tracking-wider text-mist border border-stone/30 px-2 py-1"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
