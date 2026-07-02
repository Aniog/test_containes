import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
  const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
  const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'];

  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-taupe-light leading-relaxed max-w-xs mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-taupe-light hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-taupe-light hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-taupe-light hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="font-sans text-xs text-taupe-light hover:text-ivory transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-xs text-taupe-light hover:text-ivory transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-xs text-taupe-light hover:text-ivory transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian-soft">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-taupe-light">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span key={p} className="font-sans text-[9px] tracking-wider text-taupe-light border border-obsidian-soft px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            <a href="#" className="font-sans text-xs text-taupe-light hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-taupe-light hover:text-ivory transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
