import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', href: '/collection' },
    { name: 'Earrings', href: '/collection?category=earrings' },
    { name: 'Necklaces', href: '/collection?category=necklaces' },
    { name: 'Huggies', href: '/collection?category=huggies' },
    { name: 'Gift Sets', href: '/collection?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { name: 'Pinterest', href: 'https://pinterest.com', icon: 'PI' },
  { name: 'TikTok', href: 'https://tiktok.com', icon: 'TK' },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl text-cream hover:text-cream/80 transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured, 
              worn, and loved for years to come.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-xs font-medium hover:bg-cream/10 hover:border-cream/40 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-cream/50 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-cream/50 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-cream/50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            <div className="flex items-center gap-2 text-xs text-cream/50">
              <span className="w-4 h-4 rounded-full border border-cream/30" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/50">
              <span className="w-4 h-4 rounded-full border border-cream/30" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/50">
              <span className="w-4 h-4 rounded-full border border-cream/30" />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/50">
              <span className="w-4 h-4 rounded-full border border-cream/30" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-cream/40">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-6 rounded border border-cream/20 flex items-center justify-center text-[9px] font-medium text-cream/40"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-cream/40">
              <Link to="/privacy" className="hover:text-cream/60 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-cream/60 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
