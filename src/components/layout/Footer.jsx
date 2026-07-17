import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-[0.15em] uppercase text-cream">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-cream/50 mt-4 leading-relaxed max-w-48">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it always.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-cream/40 mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-cream/40 mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-cream/40 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale', 'Affiliates'].map(item => (
                <li key={item}>
                  <a href="#" className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-cream/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <div key={p} className="bg-cream/10 px-2 py-1 rounded-sm">
                <span className="font-manrope text-[9px] text-cream/40 tracking-wider">{p}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a key={item} href="#" className="font-manrope text-xs text-cream/30 hover:text-cream/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
