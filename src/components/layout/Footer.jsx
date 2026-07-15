import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-ivory block mb-4">
              Velmora
            </span>
            <p className="text-xs leading-relaxed text-ivory/50 font-sans mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/40 hover:text-gold transition-colors duration-300">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 font-sans mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-xs text-ivory/60 hover:text-gold transition-colors duration-300 font-sans">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 font-sans mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-ivory/60 hover:text-gold transition-colors duration-300 font-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 font-sans mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-ivory/60 hover:text-gold transition-colors duration-300 font-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-ivory/30 font-sans">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
              <span
                key={p}
                className="text-[9px] font-sans text-ivory/30 border border-ivory/15 px-1.5 py-0.5 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors font-sans">Privacy</a>
            <a href="#" className="text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors font-sans">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
