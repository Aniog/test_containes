import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

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
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQs', href: '/faq' },
    ],
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Journal', href: '/journal' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ];

  const paymentIcons = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'Mastercard', color: 'bg-red-500' },
    { name: 'Amex', color: 'bg-blue-500' },
    { name: 'PayPal', color: 'bg-blue-700' },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-ivory hover:text-gold transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/70 font-light leading-relaxed max-w-xs">
              Handcrafted demi-fine jewelry designed to be treasured. 
              Timeless pieces for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs tracking-ultra-wide text-ivory/50 uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs tracking-ultra-wide text-ivory/50 uppercase mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs tracking-ultra-wide text-ivory/50 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
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
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-ivory/50">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className={`w-10 h-6 ${icon.color} rounded flex items-center justify-center`}
                >
                  <span className="text-white text-xs font-bold">
                    {icon.name.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
