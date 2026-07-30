import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '#' },
      { label: 'Size Guide', path: '#' },
      { label: 'Care Instructions', path: '#' },
      { label: 'FAQ', path: '#' },
      { label: 'Contact Us', path: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/#about' },
      { label: 'Sustainability', path: '#' },
      { label: 'Press', path: '#' },
      { label: 'Careers', path: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-black text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.12em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-body-sm text-velmora-sand leading-relaxed max-w-[280px]">
              Crafted to be treasured. Demi-fine 18K gold plated jewelry designed for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-sand hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-sand hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-sand hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h4 className="font-sans text-caption uppercase tracking-[0.12em] text-velmora-sand mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-body-sm text-white/60 hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment icons column */}
          <div className="md:col-span-2">
            <h4 className="font-sans text-caption uppercase tracking-[0.12em] text-velmora-sand mb-5">
              Payment
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="px-2.5 py-1 text-[11px] font-medium bg-white/10 rounded text-white/50"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-white/30 hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-white/30 hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
