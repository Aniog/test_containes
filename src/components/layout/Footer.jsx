import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/collection/earrings' },
  { label: 'Necklaces', href: '/collection/necklaces' },
  { label: 'Huggies', href: '/collection/huggies' },
  { label: 'Gift Sets', href: '/collection/sets' },
  { label: 'Bestsellers', href: '/collection' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Track Order', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '#' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Journal', href: '#' },
  { label: 'Careers', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-base text-text-light">
      <div className="container-wide mx-auto px-4 md:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-heading font-medium text-text-light block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman who values quality and elegance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-stone-400 hover:text-accent transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-medium tracking-nav uppercase text-stone-400 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-stone-300 hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-xs font-medium tracking-nav uppercase text-stone-400 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-stone-300 hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-medium tracking-nav uppercase text-stone-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-stone-300 hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-stone-500">Privacy Policy</span>
            <span className="text-xs text-stone-500">Terms of Service</span>
            <div className="flex items-center gap-3 ml-2">
              {/* Payment icons */}
              {['Visa', 'MC', 'Amex', 'PayPal'].map(icon => (
                <div key={icon} className="w-8 h-5 bg-stone-700 rounded flex items-center justify-center">
                  <span className="text-[8px] text-stone-400 font-medium">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
