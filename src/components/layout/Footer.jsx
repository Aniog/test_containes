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
    { label: 'Shipping & Returns', to: '/' },
    { label: 'Size Guide', to: '/' },
    { label: 'Care Instructions', to: '/' },
    { label: 'FAQ', to: '/' },
    { label: 'Contact Us', to: '/' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/' },
    { label: 'Sustainability', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Affiliates', to: '/' },
  ];

  return (
    <footer className="bg-obsidian text-ivory/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <span className="font-serif text-2xl font-light tracking-[0.18em] uppercase text-ivory">
                Velmora
              </span>
            </Link>
            <p className="mt-4 font-sans text-sm text-ivory/50 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span key={p} className="font-sans text-[9px] tracking-wider text-ivory/30 border border-ivory/20 px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
