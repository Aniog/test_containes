import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' }
  ],
  help: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'FAQs', href: '/faqs' }
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' }
  ]
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter' }
];

const paymentIcons = [
  { name: 'Visa', color: '#1A1F71' },
  { name: 'Mastercard', color: '#EB001B' },
  { name: 'Amex', color: '#006FCF' },
  { name: 'PayPal', color: '#003087' }
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link 
              to="/" 
              className="inline-block font-serif text-2xl tracking-[0.2em] text-[var(--color-cream)] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-[var(--color-taupe)] leading-relaxed mb-6 max-w-xs">
              Fine jewelry crafted for those who appreciate quiet luxury. 
              Demi-fine pieces designed to be treasured.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = typeof social.icon === 'string' ? null : social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors"
                    aria-label={social.label}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5" />
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === 'twitter' && (
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        )}
                      </svg>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)] mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-cream)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)] mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-cream)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-cream)] transition-colors"
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
      <div className="border-t border-[var(--color-warm-gray)]/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[var(--color-warm-gray)]">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-10 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ backgroundColor: icon.color + '30', border: `1px solid ${icon.color}40` }}
                  title={icon.name}
                >
                  {icon.name.charAt(0)}
                </div>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
