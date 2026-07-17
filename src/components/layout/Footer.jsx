import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-cormorant text-3xl tracking-[0.15em] text-velmora-linen">VELMORA</span>
            <p className="font-inter text-xs text-velmora-ash leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="text-velmora-ash hover:text-velmora-gold transition-colors"><Instagram size={16} /></a>
              <a href="#" className="text-velmora-ash hover:text-velmora-gold transition-colors"><Facebook size={16} /></a>
              <a href="#" className="text-velmora-ash hover:text-velmora-gold transition-colors"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-[10px] tracking-widest uppercase text-velmora-gold mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-inter text-xs text-velmora-ash hover:text-velmora-linen transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-[10px] tracking-widest uppercase text-velmora-gold mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="font-inter text-xs text-velmora-ash hover:text-velmora-linen transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-[10px] tracking-widest uppercase text-velmora-gold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="font-inter text-xs text-velmora-ash hover:text-velmora-linen transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-dark mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[11px] text-velmora-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons (text-based) */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map(p => (
              <span key={p} className="font-inter text-[9px] tracking-wider text-velmora-stone border border-velmora-stone/40 px-2 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
