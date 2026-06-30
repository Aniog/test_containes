import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', path: 'https://instagram.com', icon: 'IG' },
    { name: 'Pinterest', path: 'https://pinterest.com', icon: 'PI' },
    { name: 'TikTok', path: 'https://tiktok.com', icon: 'TT' },
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-content mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-muted-gray font-light leading-relaxed max-w-sm">
              Crafted to be treasured. Demi-fine jewelry for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-warm-gray rounded-full flex items-center justify-center text-xs font-medium text-muted-gray hover:border-gold hover:text-gold transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-muted-gray mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-muted-gray mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-muted-gray mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider bg-warm-gray/30 mt-16 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="font-sans text-xs text-muted-gray">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-sans text-xs text-muted-gray hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-sans text-xs text-muted-gray hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium text-muted-gray"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
