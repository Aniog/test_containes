import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-300">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream-100 tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-charcoal-300 leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-medium tracking-widest uppercase text-charcoal-300 hover:text-gold-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-xs font-medium tracking-widest-xl uppercase text-cream-200 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-xs font-medium tracking-widest-xl uppercase text-cream-200 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-medium tracking-widest-xl uppercase text-cream-200 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-400">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* Payment icons */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="text-[10px] font-medium tracking-wider uppercase text-charcoal-400 px-2 py-1 border border-charcoal-700 rounded"
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
