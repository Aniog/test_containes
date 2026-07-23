import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
    help: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Instructions', to: '/care' },
      { label: 'FAQs', to: '/faq' },
    ],
    company: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
    ],
  };

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
    { label: 'Pinterest', href: 'https://pinterest.com', icon: 'PI' },
    { label: 'TikTok', href: 'https://tiktok.com', icon: 'TT' },
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal'];

  return (
    <footer className="bg-warmstone-900 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-extra-wide text-cream-50 hover:text-gold-300 transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-200/80 leading-relaxed max-w-sm">
              Crafted with intention, designed for the modern woman. Our demi-fine jewelry collection celebrates everyday elegance.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cream-200/30 rounded-full flex items-center justify-center text-xs font-medium text-cream-200 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-cream-200 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-cream-200 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-cream-200 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
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
      <div className="border-t border-warmstone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-300">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-cream-300">We accept</span>
              <div className="flex items-center space-x-2">
                {paymentIcons.map(icon => (
                  <span
                    key={icon}
                    className="px-2 py-1 bg-warmstone-800 rounded text-xs font-medium text-cream-200"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
