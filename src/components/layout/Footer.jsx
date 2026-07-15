import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/collection' },
      { name: 'Earrings', href: '/collection?category=earrings' },
      { name: 'Necklaces', href: '/collection?category=necklaces' },
      { name: 'Huggies', href: '/collection?category=huggies' },
      { name: 'Gift Sets', href: '/collection?category=sets' },
    ],
    help: [
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Journal', href: '/journal' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Careers', href: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Pinterest', icon: Heart, href: 'https://pinterest.com' },
  ];

  const paymentIcons = [
    { name: 'Visa', color: '#1A1F71' },
    { name: 'Mastercard', color: '#EB001B' },
    { name: 'Amex', color: '#006FCF' },
    { name: 'PayPal', color: '#003087' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] text-white mb-6 inline-block"
            >
              VELMORA
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              Fine jewelry crafted for the modern woman. Demi-fine pieces designed to be treasured, worn, and gifted.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-white/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-10 h-6 rounded border border-white/20 flex items-center justify-center"
                >
                  <span className="text-xs font-medium" style={{ color: icon.color }}>
                    {icon.name.substring(0, 4)}
                  </span>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs text-white/40">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
