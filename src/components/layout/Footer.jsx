import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/shop' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Huggies', href: '/shop?category=huggies' },
      { name: 'Gift Sets', href: '/shop?category=sets' },
    ],
    help: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQ', href: '/faq' },
    ],
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Journal', href: '/journal' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Careers', href: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
    { name: 'Pinterest', href: 'https://pinterest.com', icon: 'PI' },
    { name: 'TikTok', href: 'https://tiktok.com', icon: 'TK' },
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'ApplePay'];

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl text-cream-50 tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-300 leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for the modern woman. 
              Each piece is designed to be treasured, worn, and loved.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-charcoal-400 hover:text-cream-50 transition-colors tracking-wider"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs text-cream-50 tracking-ultra-wide mb-4">
              SHOP
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-400 hover:text-cream-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs text-cream-50 tracking-ultra-wide mb-4">
              HELP
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-400 hover:text-cream-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs text-cream-50 tracking-ultra-wide mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-400 hover:text-cream-50 transition-colors"
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
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-charcoal-500">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-charcoal-500 hover:text-cream-50 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-charcoal-500 hover:text-cream-50 transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-charcoal-600 bg-charcoal-800 px-2 py-1 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
