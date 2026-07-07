import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ],
  help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Track Order', to: '/track' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
    { label: 'Careers', to: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-site mx-auto section-padding py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] uppercase text-white">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-[240px]">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, made to be treasured.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-[0.1em] text-white/40 hover:text-gold-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white/60 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white/60 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white/60 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2025 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/30 border border-white/10 rounded-sm"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
