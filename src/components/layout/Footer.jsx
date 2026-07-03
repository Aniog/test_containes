import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', path: '#' },
      { label: 'Returns & Exchanges', path: '#' },
      { label: 'FAQ', path: '#' },
      { label: 'Track Order', path: '#' },
      { label: 'Contact Us', path: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', path: '/about' },
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Careers', path: '#' },
      { label: 'Privacy Policy', path: '#' },
    ],
  },
];

const paymentIcons = [
  { name: 'Visa', symbol: 'VISA' },
  { name: 'Mastercard', symbol: 'MC' },
  { name: 'Amex', symbol: 'AMEX' },
  { name: 'PayPal', symbol: 'PayPal' },
  { name: 'Afterpay', symbol: 'Afterpay' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo + description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-400 max-w-sm">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated pieces designed to be treasured, worn, and passed down.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-warm-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-warm-400 hover:text-gold-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.361-.053.219-.174.265-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-warm-400 hover:text-gold-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-xs tracking-wide-2xl uppercase font-sans mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-warm-400 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-warm-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon.name}
                className="text-[10px] tracking-wide-lg uppercase text-warm-500 bg-warm-800/50 px-2 py-1 rounded"
                title={icon.name}
              >
                {icon.symbol}
              </span>
            ))}
          </div>
          <p className="text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}