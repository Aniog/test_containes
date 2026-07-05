import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'New Arrivals', to: '/shop' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', to: '/help' },
    { label: 'Size Guide', to: '/help' },
    { label: 'Care Instructions', to: '/help' },
    { label: 'FAQ', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Press', to: '/about' },
    { label: 'Affiliates', to: '/about' },
  ];

  return (
    <footer className="bg-obsidian text-ivory/80">
      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.12em] text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-ivory/60 leading-relaxed max-w-xs mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ivory mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ivory mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ivory mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ivory/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-sans text-[10px] font-semibold text-ivory/30 border border-ivory/20 px-1.5 py-0.5 rounded-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
