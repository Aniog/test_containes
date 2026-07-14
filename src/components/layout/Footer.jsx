import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-widest2 text-velmora-text-light">
              VELMORA
            </Link>
            <p className="font-inter text-xs text-velmora-mist leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-velmora-sand mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-inter text-xs text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-velmora-sand mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="font-inter text-xs text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-velmora-sand mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map(item => (
                <li key={item}>
                  <a href="#" className="font-inter text-xs text-velmora-mist hover:text-velmora-gold transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-velmora-stone/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-velmora-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-inter text-[9px] tracking-wider text-velmora-stone border border-velmora-stone/30 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="font-inter text-xs text-velmora-stone hover:text-velmora-mist transition-colors duration-300">Privacy</a>
            <a href="#" className="font-inter text-xs text-velmora-stone hover:text-velmora-mist transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
