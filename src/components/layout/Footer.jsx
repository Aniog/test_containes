import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
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
    { label: 'Contact Us', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Journal', href: '#journal' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

const socialLinks = [
  { label: 'Instagram', icon: 'IG', href: '#' },
  { label: 'Pinterest', icon: 'PI', href: '#' },
  { label: 'TikTok', icon: 'TK', href: '#' },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-200">
      {/* Newsletter */}
      <div id="newsletter" className="border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2">
              Join for 10% Off Your First Order
            </h3>
            <p className="text-cream-400 text-sm mb-6">
              Be the first to discover new collections, exclusive offers, and styling inspiration.
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-charcoal-900 border border-charcoal-700 text-cream-100 placeholder:text-charcoal-500 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 text-white px-8 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-gold-600 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl text-cream-50 tracking-wide">
              VELMORA
            </Link>
            <p className="text-cream-400 text-sm mt-4 leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who values quality and timeless elegance.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-charcoal-700 flex items-center justify-center text-cream-400 text-xs font-medium hover:border-gold-500 hover:text-gold-400 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-cream-50 text-xs uppercase tracking-ultra-wide font-medium mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-cream-400 text-sm hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-cream-50 text-xs uppercase tracking-ultra-wide font-medium mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-cream-400 text-sm">
              <p>hello@velmora.com</p>
              <p>+1 (800) 555-0123</p>
              <p className="text-xs leading-relaxed">
                Mon – Fri: 9am – 6pm EST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-xs">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {paymentIcons.map(icon => (
                <span
                  key={icon}
                  className="bg-charcoal-800 text-charcoal-400 text-[10px] font-medium px-2 py-1 rounded"
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
