import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
    ],
    Help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
    ],
    Company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-velmora-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl text-velmora-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-ivory/60 leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-lg mb-4 text-velmora-ivory">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-ivory/60 hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-ivory/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-2 py-1 text-xs bg-velmora-ivory/10 rounded text-velmora-ivory/60"
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Copyright & Social */}
            <div className="flex items-center gap-6">
              <p className="text-sm text-velmora-ivory/40">
                © 2024 Velmora Fine Jewelry. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velmora-ivory/60 hover:text-velmora-gold transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velmora-ivory/60 hover:text-velmora-gold transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velmora-ivory/60 hover:text-velmora-gold transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}