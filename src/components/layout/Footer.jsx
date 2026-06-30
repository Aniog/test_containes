import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '/' },
  { label: 'Size Guide', href: '/' },
  { label: 'Care Instructions', href: '/' },
  { label: 'FAQ', href: '/' },
  { label: 'Contact Us', href: '/' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '/' },
  { label: 'Press', href: '/' },
  { label: 'Affiliates', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-velvet-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-cream block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-stone leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-stone hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velvet-300 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-stone hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velvet-300 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-stone hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velvet-300 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-stone hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-mink/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-sans text-xs text-stone">
            <span>Made with</span>
            <Heart size={11} className="text-gold fill-gold" />
            <span>for jewelry lovers</span>
          </div>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((p) => (
              <span
                key={p}
                className="font-sans text-[9px] tracking-wider text-stone border border-mink/50 rounded px-1.5 py-0.5"
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
