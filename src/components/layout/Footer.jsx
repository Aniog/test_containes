import { Link } from 'react-router-dom';
import { Instagram, Facebook, Gem } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface-dark)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-[var(--font-serif)] text-xl tracking-[0.2em] font-semibold mb-3">VELMORA</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Timeless demi-fine jewelry crafted for the modern woman. Proudly 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Gem, label: 'Pinterest' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/40">Shop</h4>
            <div className="flex flex-col gap-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((label) => (
                <Link key={label} to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/40">Help</h4>
            <div className="flex flex-col gap-2.5">
              {['Shipping & Returns', 'Jewelry Care', 'Contact Us', 'FAQ', 'Track Order'].map((label) => (
                <a key={label} href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/40">Company</h4>
            <div className="flex flex-col gap-2.5">
              {['Our Story', 'Journal', 'Sustainability', 'Stockists', 'Careers'].map((label) => (
                <a key={label} href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; {year} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
