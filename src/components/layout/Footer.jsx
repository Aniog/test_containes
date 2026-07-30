import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl text-ivory tracking-widest mb-4">VELMORA</p>
            <p className="font-sans text-sm text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs text-ivory/40 tracking-widest uppercase mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs text-ivory/40 tracking-widest uppercase mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs text-ivory/40 tracking-widest uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="font-sans text-[9px] text-ivory/40 border border-ivory/20 px-1.5 py-0.5 tracking-wider"
              >
                {icon}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-ivory/40 hover:text-ivory/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-ivory/40 hover:text-ivory/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
