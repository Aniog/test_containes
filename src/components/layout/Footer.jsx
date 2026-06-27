import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'Care Instructions', to: '/care' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
    { label: 'Careers', to: '/careers' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-light tracking-widest uppercase text-cream block mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </Link>
            <p
              className="text-sm text-warm-gray leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-warm-gray hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-warm-gray hover:text-gold-light transition-colors" aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-warm-gray hover:text-gold-light transition-colors" aria-label="Twitter">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="text-xs tracking-widest uppercase font-medium text-cream mb-5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-xs text-warm-gray hover:text-gold-light transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-warm-gray"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="bg-white/10 text-warm-gray text-[9px] tracking-wider px-2 py-1 rounded-sm font-medium"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-warm-gray hover:text-gold-light transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-warm-gray hover:text-gold-light transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
