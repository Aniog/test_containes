import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1714', color: 'rgba(250,247,242,0.80)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase block mb-4" style={{ color: '#FAF7F2' }}>
              Velmora
            </Link>
            <p className="font-manrope text-xs leading-relaxed mb-6" style={{ color: 'rgba(250,247,242,0.50)' }}>
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors" style={{ color: 'rgba(250,247,242,0.50)' }}>
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors" style={{ color: 'rgba(250,247,242,0.50)' }}>
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-champagne transition-colors" style={{ color: 'rgba(250,247,242,0.50)' }}>
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(250,247,242,0.40)' }}>Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-manrope text-xs hover:text-champagne transition-colors" style={{ color: 'rgba(250,247,242,0.60)' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(250,247,242,0.40)' }}>Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="font-manrope text-xs hover:text-champagne transition-colors" style={{ color: 'rgba(250,247,242,0.60)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(250,247,242,0.40)' }}>Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" className="font-manrope text-xs hover:text-champagne transition-colors" style={{ color: 'rgba(250,247,242,0.60)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(250,247,242,0.10)' }}>
          <p className="font-manrope text-xs" style={{ color: 'rgba(250,247,242,0.30)' }}>
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-manrope text-[9px] tracking-wider px-2 py-1"
                style={{ color: 'rgba(250,247,242,0.30)', border: '1px solid rgba(250,247,242,0.10)' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
