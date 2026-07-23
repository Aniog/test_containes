import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
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
    { label: 'Our Story', href: '/#story' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ];

  return (
    <footer className="bg-espresso text-parchment">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-parchment">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-parchment/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-parchment/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/50 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-parchment/50 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-5 font-semibold">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-sans text-sm text-parchment/60 hover:text-parchment transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-5 font-semibold">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-sans text-sm text-parchment/60 hover:text-parchment transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold mb-5 font-semibold">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-sans text-sm text-parchment/60 hover:text-parchment transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-parchment/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-parchment/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] tracking-wider text-parchment/30 border border-parchment/20 px-1.5 py-0.5"
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
