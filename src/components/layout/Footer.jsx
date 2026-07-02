import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Jewelry', to: '/shop' },
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
        { label: 'Gift Sets', to: '/shop' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & Returns', to: '#' },
        { label: 'Size Guide', to: '#' },
        { label: 'Care Instructions', to: '#' },
        { label: 'FAQ', to: '#' },
        { label: 'Contact Us', to: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', to: '#' },
        { label: 'Sustainability', to: '#' },
        { label: 'Press', to: '#' },
        { label: 'Careers', to: '#' },
        { label: 'Journal', to: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase font-semibold text-white">
              Velmora
            </Link>
            <p className="mt-4 font-sans text-sm text-charcoal-400 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman —
              accessible luxury without compromise.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-charcoal-400 hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-charcoal-400 hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-charcoal-400 hover:text-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-[0.14em] uppercase font-semibold text-charcoal-300 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-charcoal-400 hover:text-brand-gold transition-colors duration-200"
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

      {/* Payment bar */}
      <div className="section-padding border-t border-charcoal-800">
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(pay => (
              <span
                key={pay}
                className="font-sans text-[10px] tracking-wider uppercase bg-charcoal-800 text-charcoal-400 px-2.5 py-1 rounded-sm"
              >
                {pay}
              </span>
            ))}
          </div>
          <p className="font-sans text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
