import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-white font-medium">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-wider text-white/50 hover:text-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4 font-sans font-medium">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4 font-sans font-medium">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4 font-sans font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
