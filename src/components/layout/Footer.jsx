import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop?category=huggies', label: 'Huggies' },
  { to: '/shop', label: 'All Jewelry' },
  { to: '/shop?sort=newest', label: 'New Arrivals' },
];

const helpLinks = [
  { to: '/shipping', label: 'Shipping Info' },
  { to: '/returns', label: 'Returns & Exchanges' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/size-guide', label: 'Size Guide' },
];

const companyLinks = [
  { to: '/about', label: 'Our Story' },
  { to: '/journal', label: 'Journal' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/careers', label: 'Careers' },
  { to: '/press', label: 'Press' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-sand">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-widest text-brand-ivory font-light">
                VELMORA
              </span>
            </Link>
            <p className="text-sm text-brand-sand/80 leading-relaxed mb-6">
              Fine jewelry crafted to be treasured. 18K gold-plated, hypoallergenic, and designed for the modern woman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-sand/60 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-sand/60 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-sand/60 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-brand-ivory font-medium mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-brand-ivory font-medium mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest-xl uppercase text-brand-ivory font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-warmgray/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-sand/50">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* Payment icons */}
              <div className="flex items-center gap-3">
                {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(method => (
                  <span
                    key={method}
                    className="text-[10px] tracking-wider uppercase text-brand-sand/40 border border-brand-sand/20 px-2 py-1 rounded"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
