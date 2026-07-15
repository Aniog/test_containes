import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="font-cormorant text-2xl font-medium tracking-[0.15em] uppercase"
              style={{ color: '#FAF7F2' }}
            >
              Velmora
            </Link>
            <p className="font-manrope text-xs leading-relaxed mt-4 max-w-xs" style={{ color: 'rgba(250,247,242,0.5)' }}>
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors" style={{ color: 'rgba(250,247,242,0.4)' }}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors" style={{ color: 'rgba(250,247,242,0.4)' }}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-velmora-gold transition-colors" style={{ color: 'rgba(250,247,242,0.4)' }}>
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-manrope text-xs tracking-widest uppercase mb-5" style={{ color: '#C9A96E' }}>
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-xs hover:text-velmora-ivory transition-colors"
                      style={{ color: 'rgba(250,247,242,0.5)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(250,247,242,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs" style={{ color: 'rgba(250,247,242,0.3)' }}>
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="rounded px-2 py-1"
                style={{ backgroundColor: 'rgba(250,247,242,0.08)', border: '1px solid rgba(250,247,242,0.12)' }}
              >
                <span className="font-manrope text-[9px] tracking-wide" style={{ color: 'rgba(250,247,242,0.5)' }}>
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
