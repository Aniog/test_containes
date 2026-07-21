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
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQ', path: '/faq' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', path: 'https://instagram.com' },
    { name: 'Pinterest', path: 'https://pinterest.com' },
    { name: 'TikTok', path: 'https://tiktok.com' },
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-[var(--deep-espresso)] text-[var(--ivory-cream)]">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider hover:text-[var(--champagne-gold)] transition-colors inline-block mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-[var(--warm-stone)] leading-relaxed mb-6">
              Fine jewelry crafted for the modern woman. Timeless designs, premium quality, accessible luxury.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--warm-stone)] hover:text-[var(--champagne-gold)] transition-colors"
                  aria-label={social.name}
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-wider mb-4 text-[var(--champagne-gold)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--warm-stone)] hover:text-[var(--ivory-cream)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-wider mb-4 text-[var(--champagne-gold)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              HELP
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--warm-stone)] hover:text-[var(--ivory-cream)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="text-sm font-medium tracking-wider mb-4 text-[var(--champagne-gold)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[var(--warm-stone)] hover:text-[var(--ivory-cream)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Mini */}
          <div className="col-span-2 md:col-span-1">
            <h4
              className="text-sm font-medium tracking-wider mb-4 text-[var(--champagne-gold)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              STAY CONNECTED
            </h4>
            <p className="text-sm text-[var(--warm-stone)] mb-4">
              Join for 10% off your first order.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-transparent border border-[var(--warm-stone)] text-sm text-[var(--ivory-cream)] placeholder:text-[var(--soft-gray)] focus:outline-none focus:border-[var(--champagne-gold)] transition-colors"
              />
              <button className="px-4 py-2 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] text-sm font-medium hover:bg-[var(--rose-gold)] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--charcoal)]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--soft-gray)]">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="px-2 py-1 bg-[var(--charcoal)] rounded text-xs text-[var(--soft-gray)]"
                >
                  {icon}
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
