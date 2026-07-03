import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/size-guide' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, path: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
  ];

  return (
    <footer className="bg-velmora-ivory pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-velmora-charcoal">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-stone mt-4 leading-relaxed">
              Premium demi-fine jewelry designed for the modern woman. Crafted to be treasured.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest text-velmora-charcoal uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-velmora-mist">
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-velmora-mist flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map((payment) => (
              <div
                key={payment}
                className="w-12 h-8 bg-velmora-cream border border-velmora-mist flex items-center justify-center"
              >
                <span className="text-[8px] text-velmora-stone uppercase">{payment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-velmora-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}