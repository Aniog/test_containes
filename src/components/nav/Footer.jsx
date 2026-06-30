import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'Bestsellers', to: '/shop' },
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
    { label: 'Press', to: '/press' },
    { label: 'Affiliates', to: '/affiliates' },
  ];

  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest2 uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-xs text-taupe-light leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-taupe-light hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-taupe-light hover:text-gold transition-colors duration-300">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-taupe-light hover:text-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-taupe-light hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-taupe-light hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-taupe-light hover:text-gold transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-taupe-light">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] tracking-wider text-taupe-light border border-obsidian-light rounded px-1.5 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-taupe-light hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-taupe-light hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
