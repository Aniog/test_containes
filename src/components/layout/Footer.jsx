import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-white font-medium">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-300 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Premium materials, attainable prices, designed to be lived in.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-velvet-700 flex items-center justify-center
                    text-velvet-400 hover:text-white hover:border-velvet-400 transition-colors"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[['Shop', shopLinks], ['Help', helpLinks], ['Company', companyLinks]].map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-sm tracking-[0.15em] uppercase text-white mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-velvet-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment + bottom */}
        <div className="mt-14 pt-8 border-t border-velvet-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 text-xs text-velvet-500 tracking-wider uppercase">
            <span>Visa</span>
            <span className="text-velvet-700">·</span>
            <span>Mastercard</span>
            <span className="text-velvet-700">·</span>
            <span>Amex</span>
            <span className="text-velvet-700">·</span>
            <span>PayPal</span>
            <span className="text-velvet-700">·</span>
            <span>Apple Pay</span>
          </div>
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
