import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Sets & Gifts'],
  },
  {
    title: 'Help',
    links: ['Shipping & Delivery', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Story', 'Sustainability', 'Press', 'Careers'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-white">
      <div className="max-w-content mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl text-white tracking-wider">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Elevated essentials for the modern woman.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/80 hover:text-gold-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay'].map((method) => (
              <div
                key={method}
                className="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] text-white/40 uppercase tracking-wider"
              >
                {method === 'apple-pay' ? 'AP' : method.slice(0, 2)}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-white/60 hover:text-gold-accent transition-colors uppercase tracking-wider"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:text-left">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}