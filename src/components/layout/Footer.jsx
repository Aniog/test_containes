import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-cormorant text-2xl tracking-widest mb-4">VELMORA</p>
            <p className="font-manrope text-xs text-velmora-whisper leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-whisper hover:text-velmora-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-whisper hover:text-velmora-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-whisper hover:text-velmora-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">Shop</p>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-manrope text-xs text-velmora-whisper hover:text-velmora-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">Help</p>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="font-manrope text-xs text-velmora-whisper hover:text-velmora-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">Company</p>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'].map(item => (
                <li key={item}>
                  <a href="#" className="font-manrope text-xs text-velmora-whisper hover:text-velmora-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-stone/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-velmora-whisper">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map(p => (
              <span
                key={p}
                className="font-manrope text-[9px] uppercase tracking-wider text-velmora-whisper border border-velmora-stone/40 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-5">
            <a href="#" className="font-manrope text-xs text-velmora-whisper hover:text-velmora-cream transition-colors">Privacy</a>
            <a href="#" className="font-manrope text-xs text-velmora-whisper hover:text-velmora-cream transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
