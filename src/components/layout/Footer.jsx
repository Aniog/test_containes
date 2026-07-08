import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
  { label: 'Bestsellers', to: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '/' },
  { label: 'Size Guide', to: '/' },
  { label: 'Care Instructions', to: '/' },
  { label: 'FAQ', to: '/' },
  { label: 'Contact Us', to: '/' },
];

const companyLinks = [
  { label: 'Our Story', to: '/#about' },
  { label: 'Sustainability', to: '/' },
  { label: 'Press', to: '/' },
  { label: 'Careers', to: '/' },
  { label: 'Privacy Policy', to: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <span className="font-serif text-2xl tracking-widest2 font-light text-velmora-ivory">VELMORA</span>
            </Link>
            <p className="mt-4 font-sans text-xs text-velmora-sand leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-sand hover:text-velmora-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-sand hover:text-velmora-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-sand hover:text-velmora-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-velmora-sand hover:text-velmora-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-velmora-sand hover:text-velmora-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-velmora-sand hover:text-velmora-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-brown mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-velmora-stone">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons (text-based) */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-sans text-[10px] text-velmora-stone border border-velmora-brown px-2 py-0.5 rounded-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
