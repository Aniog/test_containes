import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider uppercase text-cream-50">
              Velmora
            </Link>
            <p className="text-sm text-charcoal-400 mt-4 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-ultra-wide uppercase text-cream-100 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-charcoal-500">
            <span className="text-[10px] tracking-wide">We accept</span>
            <div className="flex gap-2 ml-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(brand => (
                <span
                  key={brand}
                  className="px-2 py-1 border border-charcoal-700 text-[9px] tracking-wide text-charcoal-400"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
