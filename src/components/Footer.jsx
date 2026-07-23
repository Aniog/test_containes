import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-nav-dark text-white">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-gold block mb-4">
              VELMORA
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Made for the woman who values quiet luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4 font-sans">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-text-secondary hover:text-white transition-colors duration-300 font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4 font-sans">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors duration-300 font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4 font-sans">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-text-secondary hover:text-white transition-colors duration-300 font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal'].map(p => (
              <span key={p} className="text-xs text-text-secondary font-sans uppercase tracking-wide">{p}</span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* Social links */}
            {['Instagram', 'Pinterest', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-xs text-text-secondary hover:text-white transition-colors duration-300 font-sans uppercase tracking-wide">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-text-secondary font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
