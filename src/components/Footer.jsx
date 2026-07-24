import { Link } from 'react-router-dom';

const footerColumns = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping Info', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'],
  Company: ['About Us', 'Our Story', 'Journal', 'Ethics', 'Careers'],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay'];

export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo + Social */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-white/50 mt-3 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Made to be treasured, designed to be worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-xs text-white/50 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/70 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="font-sans text-xs text-white/30 uppercase tracking-wider"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="font-sans text-xs text-white/30">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}