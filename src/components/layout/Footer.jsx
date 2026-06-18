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
    { label: 'Affiliates', to: '/affiliates' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-espresso" style={{ color: 'rgba(253,250,246,0.8)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-[0.12em] uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-manrope text-xs leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(253,250,246,0.6)' }}>
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured for a lifetime.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-gold transition-colors" style={{ color: 'rgba(253,250,246,0.5)' }}>
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-manrope text-xs tracking-[0.12em] uppercase mb-4" style={{ color: 'rgba(253,250,246,0.45)' }}>
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-manrope text-xs hover:text-gold transition-colors" style={{ color: 'rgba(253,250,246,0.6)' }}>
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
      <div style={{ borderTop: '1px solid rgba(253,250,246,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs" style={{ color: 'rgba(253,250,246,0.35)' }}>
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div key={icon} className="rounded px-2 py-1 font-manrope text-[9px] tracking-wider"
                style={{ backgroundColor: 'rgba(253,250,246,0.1)', color: 'rgba(253,250,246,0.45)' }}>
                {icon}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-xs hover:text-gold transition-colors" style={{ color: 'rgba(253,250,246,0.35)' }}>Privacy</a>
            <a href="#" className="font-manrope text-xs hover:text-gold transition-colors" style={{ color: 'rgba(253,250,246,0.35)' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
