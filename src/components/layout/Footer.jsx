import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Track Order', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-ivory-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <span className="font-serif text-2xl tracking-ultra-wide text-ivory-50 font-semibold">
                VELMORA
              </span>
            </Link>
            <p className="text-sm text-charcoal-400 leading-relaxed max-w-xs mb-6">
              Crafted to be treasured. Premium demi-fine gold jewelry designed for the modern woman. 
              18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-ultra-wide uppercase text-ivory-100 font-semibold mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-200"
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
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] font-medium tracking-wide text-charcoal-500 bg-charcoal-800 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
