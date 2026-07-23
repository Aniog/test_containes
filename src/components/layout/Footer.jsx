import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl tracking-[0.15em] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              VELMORA
            </h3>
            <p className="text-taupe text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated pieces designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-cream transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-5 text-cream/60">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Sets', 'All Products', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-taupe hover:text-cream transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-5 text-cream/60">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQs', 'Contact Us', 'Track Order'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-taupe hover:text-cream transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-5 text-cream/60">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists', 'Affiliates'].map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-taupe hover:text-cream transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-divider mt-14 mb-8" style={{ background: 'rgba(255,255,255,0.1)' }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="flex gap-3 text-cream/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}