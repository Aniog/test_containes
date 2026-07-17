import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { href: '/shop', label: 'All Jewelry' },
    { href: '/shop?category=earrings', label: 'Earrings' },
    { href: '/shop?category=necklaces', label: 'Necklaces' },
    { href: '/shop?category=huggies', label: 'Huggies' },
    { href: '/shop?category=sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { href: '/shipping', label: 'Shipping & Returns' },
    { href: '/sizing', label: 'Size Guide' },
    { href: '/care', label: 'Jewelry Care' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const companyLinks = [
    { href: '/about', label: 'Our Story' },
    { href: '/journal', label: 'Journal' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/careers', label: 'Careers' },
  ];

  const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
    { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
    { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
    { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container-main py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl uppercase tracking-ultra-wide">
                Velmora
              </span>
            </Link>
            <p className="text-white/70 font-light leading-relaxed mb-6 max-w-sm">
              Timeless demi-fine jewelry crafted for the modern woman. 
              Each piece is designed to be treasured, not just worn.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-extra-wide mb-6 text-gold">
              Shop
            </h3>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-gold transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-extra-wide mb-6 text-gold">
              Help
            </h3>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-gold transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-extra-wide mb-6 text-gold">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-gold transition-colors font-light"
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
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm font-light">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-white/50 mr-2">We Accept</span>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 bg-white/10 text-xs font-medium uppercase tracking-wide">
                  Visa
                </div>
                <div className="px-3 py-1.5 bg-white/10 text-xs font-medium uppercase tracking-wide">
                  Mastercard
                </div>
                <div className="px-3 py-1.5 bg-white/10 text-xs font-medium uppercase tracking-wide">
                  Amex
                </div>
                <div className="px-3 py-1.5 bg-white/10 text-xs font-medium uppercase tracking-wide">
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
