import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'Gift Sets', href: '/shop?category=Sets' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '/about' },
    { label: 'Care Guide', href: '/about' },
    { label: 'Size Guide', href: '/about' },
    { label: 'FAQ', href: '/about' },
    { label: 'Contact Us', href: '/about' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Careers', href: '/about' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.18em] inline-block mb-5">
              VELMORA
            </Link>
            <p className="text-taupe text-sm leading-relaxed max-w-sm mb-6">
              Demi-fine jewelry designed to be treasured. Crafted in 18k gold plate,
              made for everyday luxury and the moments worth remembering.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-5">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-5">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-taupe">
            <span className="px-2 py-1 border border-white/10 rounded">Visa</span>
            <span className="px-2 py-1 border border-white/10 rounded">Mastercard</span>
            <span className="px-2 py-1 border border-white/10 rounded">Amex</span>
            <span className="px-2 py-1 border border-white/10 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
