import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-warm text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-brand-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-cream/70 leading-relaxed font-sans">
              Crafted for the modern woman. Demi-fine jewelry that celebrates quiet luxury and timeless elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-brand-gold-muted">
              Shop
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-cream/70 hover:text-brand-gold-light transition-colors duration-300 no-underline font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-brand-gold-muted">
              Help
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <span className="text-sm text-brand-cream/70 hover:text-brand-gold-light transition-colors duration-300 cursor-pointer font-sans">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-brand-gold-muted">
              Company
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map(item => (
                <li key={item}>
                  <span className="text-sm text-brand-cream/70 hover:text-brand-gold-light transition-colors duration-300 cursor-pointer font-sans">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] tracking-wider uppercase text-brand-cream/40 font-sans border border-brand-cream/20 px-2 py-1 rounded-sm">
                {method}
              </span>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-6">
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
              <span key={social} className="text-xs text-brand-cream/50 hover:text-brand-gold-light transition-colors duration-300 cursor-pointer font-sans">
                {social}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-brand-cream/40 mt-6 font-sans">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
