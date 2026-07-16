import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
    },
    {
      title: 'Help',
      links: ['Shipping & Delivery', 'Returns & Exchanges', 'FAQs', 'Size Guide', 'Contact Us'],
    },
    {
      title: 'Company',
      links: ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'],
    },
  ];

  return (
    <footer className="bg-dark-forest text-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-gray/70 leading-relaxed max-w-xs">
              Handcrafted demi-fine jewelry designed to be treasured — from our studio to you.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-warm-gray/20 flex items-center justify-center hover:border-warm-gold hover:text-warm-gold transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-xs tracking-widest uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-warm-gray/70 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay'].map((pm) => (
              <span
                key={pm}
                className="text-xs text-warm-gray/50 tracking-wider uppercase"
              >
                {pm}
              </span>
            ))}
          </div>
          <p className="text-xs text-warm-gray/50">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}