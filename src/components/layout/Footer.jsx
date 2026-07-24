import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-velmora-mink/50">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-cormorant text-2xl tracking-[0.2em] font-medium text-velmora-cream">
              VELMORA
            </span>
            <p className="font-inter text-xs text-velmora-sand/70 mt-4 leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-sand/60 hover:text-velmora-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-sand/60 hover:text-velmora-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-sand/60 hover:text-velmora-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-inter text-xs text-velmora-sand/70 hover:text-velmora-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="font-inter text-xs text-velmora-sand/70 hover:text-velmora-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map(item => (
                <li key={item}>
                  <a href="#" className="font-inter text-xs text-velmora-sand/70 hover:text-velmora-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-xs text-velmora-sand/50">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <div key={p} className="px-2 py-1 border border-velmora-mink/50 rounded">
                <span className="font-inter text-[9px] text-velmora-sand/50 tracking-wider">{p}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="font-inter text-xs text-velmora-sand/50 hover:text-velmora-sand transition-colors">Privacy</a>
            <a href="#" className="font-inter text-xs text-velmora-sand/50 hover:text-velmora-sand transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
