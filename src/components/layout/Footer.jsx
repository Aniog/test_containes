import { Link } from 'react-router-dom';

const shopLinks = [
  { name: 'All Jewelry', href: '/shop' },
  { name: 'Earrings', href: '/shop?category=earrings' },
  { name: 'Necklaces', href: '/shop?category=necklaces' },
  { name: 'Huggies', href: '/shop?category=huggies' },
  { name: 'Gift Sets', href: '/shop?tag=gift-set' },
];

const helpLinks = [
  { name: 'Shipping & Returns', href: '/shipping' },
  { name: 'Size Guide', href: '/size-guide' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Track Order', href: '/track' },
];

const companyLinks = [
  { name: 'Our Story', href: '/about' },
  { name: 'Journal', href: '/journal' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Press', href: '/press' },
  { name: 'Careers', href: '/careers' },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-white/80">
      <div className="container-main section-padding">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl font-light text-white tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine gold jewelry designed for the modern woman.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/50 hover:text-gold-light text-xs uppercase tracking-wider transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs tracking-subtitle uppercase text-white/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs tracking-subtitle uppercase text-white/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs tracking-subtitle uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-gold-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-2 py-1 border border-white/10 rounded text-[10px] text-white/40 font-medium tracking-wide"
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
}
