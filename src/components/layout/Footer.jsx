import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: 'IG' },
  { name: 'Pinterest', icon: 'PI' },
  { name: 'TikTok', icon: 'TK' },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-deep-base text-cream">
      {/* Main footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-cream hover:text-gold-accent transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gold-light/70 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — elegant, accessible, and made to last.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gold-light/30 flex items-center justify-center text-xs font-sans text-gold-light hover:bg-gold-accent hover:text-deep-base hover:border-gold-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-sans text-xs uppercase tracking-wider text-gold-light mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream/70 hover:text-gold-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="container-wide">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-cream/50">
          &copy; 2026 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {paymentIcons.map((icon) => (
            <span
              key={icon}
              className="px-2 py-1 text-[10px] font-sans uppercase tracking-wider text-cream/40 border border-cream/15 rounded"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
