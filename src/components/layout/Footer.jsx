import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
      { label: 'New Arrivals', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'Careers', to: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];
const socialLinks = ['Instagram', 'Pinterest', 'TikTok'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Logo + blurb */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-widest-2xl text-sand-50 font-medium">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-sand-50/50 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated, hypoallergenic,
              and designed for the modern woman.
            </p>
            {/* Social */}
            <div className="flex gap-5 mt-6">
              {socialLinks.map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-xs tracking-widest uppercase text-sand-50/40 hover:text-gold transition-colors duration-300"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-[11px] tracking-widest uppercase text-sand-50/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-sand-50/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] tracking-widest uppercase text-sand-50/40 mb-4">
              Stay in Touch
            </h4>
            <p className="text-sm text-sand-50/50 mb-4">
              10% off your first order.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Email address"
                className="bg-espresso-light border border-sand-50/10 text-sand-50 text-sm px-3 py-2 placeholder:text-sand-50/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="bg-gold text-white text-xs tracking-widest uppercase py-2 px-4 hover:bg-gold-dark transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-sand-50/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-50/30">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {paymentIcons.map((name) => (
              <span key={name} className="font-sans text-[10px] tracking-wider uppercase">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
