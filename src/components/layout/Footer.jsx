import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Instructions', to: '/care' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-ivory/50 leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'TikTok', 'Pinterest'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-ivory/40 hover:text-gold text-xs uppercase tracking-wider font-sans transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs uppercase tracking-widest-xl font-medium text-ivory mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-ivory/30">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment icons */}
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
                <span
                  key={method}
                  className="text-ivory/20 text-[10px] uppercase tracking-wider font-sans"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
