import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/shop' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Huggies', href: '/shop?category=huggies' },
      { name: 'Gift Sets', href: '/shop?category=sets' }
    ],
    help: [
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQ', href: '/faq' },
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
    { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
    { name: 'Pinterest', href: 'https://pinterest.com', icon: 'PI' },
    { name: 'TikTok', href: 'https://tiktok.com', icon: 'TK' }
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-white">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Made with love, designed for everyday elegance.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-ultra-wide text-white/40 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-ultra-wide text-white/40 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-ultra-wide text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-wider text-white/50 hover:text-velmora-gold transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs font-medium tracking-wider text-white/40 px-2 py-1 border border-white/20 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
