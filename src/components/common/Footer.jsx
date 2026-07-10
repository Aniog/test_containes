import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '/#' },
  { label: 'FAQ', href: '/#' },
  { label: 'Size Guide', href: '/#' },
  { label: 'Care Instructions', href: '/#' },
  { label: 'Contact Us', href: '/#' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
  { label: 'Sustainability', href: '/#' },
  { label: 'Press', href: '/#' },
  { label: 'Affiliates', href: '/#' },
];

const Footer = () => (
  <footer className="bg-velvet-900 text-ivory-200">
    {/* Main footer */}
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-14 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-serif text-2xl font-light tracking-widest2 uppercase text-ivory-100 block mb-4">
            Velmora
          </Link>
          <p className="font-sans text-xs text-ivory-200/70 leading-relaxed mb-6 max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic. Timeless. Yours.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-ivory-200/60 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory-200/60 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-ivory-200/60 hover:text-gold transition-colors">
              <Pinterest size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-sans text-[10px] tracking-widest3 uppercase text-gold mb-5">Shop</h4>
          <ul className="flex flex-col gap-3">
            {shopLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="font-sans text-xs text-ivory-200/70 hover:text-ivory-100 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-sans text-[10px] tracking-widest3 uppercase text-gold mb-5">Help</h4>
          <ul className="flex flex-col gap-3">
            {helpLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="font-sans text-xs text-ivory-200/70 hover:text-ivory-100 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sans text-[10px] tracking-widest3 uppercase text-gold mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="font-sans text-xs text-ivory-200/70 hover:text-ivory-100 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-velvet-800">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[10px] text-ivory-200/40 tracking-wide">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* Payment icons as text badges */}
          {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
            <span
              key={p}
              className="font-sans text-[9px] tracking-wide text-ivory-200/40 border border-ivory-200/20 px-1.5 py-0.5"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link to="/#" className="font-sans text-[10px] text-ivory-200/40 hover:text-ivory-200/70 transition-colors">
            Privacy
          </Link>
          <Link to="/#" className="font-sans text-[10px] text-ivory-200/40 hover:text-ivory-200/70 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
