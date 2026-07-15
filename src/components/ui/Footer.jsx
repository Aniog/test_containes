import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-cream/80">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-cream/80">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-cream/80">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(card => (
                <span key={card} className="px-2 py-1 bg-cream/10 rounded text-[10px] text-cream/60">
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
