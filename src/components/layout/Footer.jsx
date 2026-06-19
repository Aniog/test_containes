import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { href: '/collection', label: 'All Jewelry' },
      { href: '/collection?category=earrings', label: 'Earrings' },
      { href: '/collection?category=necklaces', label: 'Necklaces' },
      { href: '/collection?category=huggies', label: 'Huggies' },
    ],
    help: [
      { href: '#', label: 'Shipping & Returns' },
      { href: '#', label: 'Size Guide' },
      { href: '#', label: 'Care Instructions' },
      { href: '#', label: 'Contact Us' },
    ],
    company: [
      { href: '/about', label: 'Our Story' },
      { href: '#', label: 'Sustainability' },
      { href: '#', label: 'Press' },
      { href: '#', label: 'Careers' },
    ],
  };

  const socialLinks = [
    { href: '#', label: 'Instagram', icon: 'IG' },
    { href: '#', label: 'Pinterest', icon: 'PI' },
    { href: '#', label: 'TikTok', icon: 'TK' },
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: 'var(--color-espresso)', color: 'var(--color-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-cream)' }}
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm opacity-70">
              Demi-fine jewelry crafted for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 opacity-60">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 opacity-60">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 opacity-60">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs tracking-widest uppercase mb-4 opacity-60">Stay Connected</h4>
            <p className="text-sm opacity-70 mb-4">
              Join for 10% off your first order.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-transparent border-b"
                style={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'var(--color-cream)',
                }}
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm tracking-wider uppercase"
                style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs opacity-50">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] tracking-wider px-2 py-1 rounded"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}