import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

// Custom Pinterest icon since it's not in lucide-react
const PinterestIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" x2="12" y1="17" y2="22" />
    <path d="M17.34 15a7 7 0 1 0-2.33 2.34" />
    <circle cx="5" cy="5" r="2" />
  </svg>
);

const footerLinks = {
  shop: [
    { name: 'All Jewelry', href: '/collection' },
    { name: 'Earrings', href: '/collection?category=earrings' },
    { name: 'Necklaces', href: '/collection?category=necklaces' },
    { name: 'Huggies', href: '/collection?category=huggies' },
    { name: 'Gift Sets', href: '/collection?category=sets' }
  ],
  help: [
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Jewelry Care', href: '/care' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' }
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' }
  ]
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Pinterest', icon: PinterestIcon, href: 'https://pinterest.com' }
];

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Fine jewelry crafted for those who appreciate quiet luxury. Each piece is designed to be treasured, never forgotten.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-sm font-medium tracking-wider uppercase text-[var(--color-text-primary)] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help Links */}
          <div>
            <h4 className="font-sans text-sm font-medium tracking-wider uppercase text-[var(--color-text-primary)] mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-sans text-sm font-medium tracking-wider uppercase text-[var(--color-text-primary)] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="divider mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons - Using text representation */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--color-text-muted)]">We accept:</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 text-[10px] font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
