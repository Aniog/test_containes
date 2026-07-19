import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', to: '/' },
    { label: 'Size Guide', to: '/' },
    { label: 'Care Instructions', to: '/' },
    { label: 'FAQs', to: '/' },
    { label: 'Contact Us', to: '/' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/' },
    { label: 'Sustainability', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Journal', to: '/' },
  ];

  return (
    <footer className="bg-velmora-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-white block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted with intention for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-sans text-[10px] uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
