import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pin } from 'lucide-react';

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
  { label: 'Careers', href: '/' },
  { label: 'Affiliates', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-widest uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-inter text-xs text-ivory/50 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the everyday woman. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-ivory/50 hover:text-gold transition-colors">
                <Pin size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <FooterColumn title="Shop" links={shopLinks} />

          {/* Help */}
          <FooterColumn title="Help" links={helpLinks} />

          {/* Company */}
          <FooterColumn title="Company" links={companyLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-inter text-[9px] tracking-wider uppercase text-ivory/30 border border-ivory/15 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            <a href="/" className="font-inter text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Privacy</a>
            <a href="/" className="font-inter text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-inter text-xs tracking-widest uppercase text-ivory/60 mb-5">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map(link => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="font-inter text-xs text-ivory/50 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
