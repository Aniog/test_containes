import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/collection' },
    { label: 'Earrings', href: '/collection?category=earrings' },
    { label: 'Necklaces', href: '/collection?category=necklaces' },
    { label: 'Huggies', href: '/collection?category=huggies' },
    { label: 'Gift Sets', href: '/collection?category=sets' },
  ],
  help: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-content mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
              Fine jewelry crafted to be treasured. Demi-fine pieces for the modern woman.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-sm font-medium tracking-wider uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-sm font-medium tracking-wider uppercase mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-sm font-medium tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-xs">We accept</span>
              <div className="flex items-center gap-2">
                {/* Visa */}
                <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold">MC</span>
                </div>
                {/* Amex */}
                <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[7px] font-bold">AMEX</span>
                </div>
                {/* PayPal */}
                <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-[7px] font-bold">PayPal</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
