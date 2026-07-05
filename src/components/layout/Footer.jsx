import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-brand-cream no-underline">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-brand-muted-light mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-brand-cream mb-4">
              Shop
            </h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-brand-muted-light hover:text-brand-cream transition-colors no-underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-brand-cream mb-4">
              Help
            </h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link to="/" className="font-sans text-sm text-brand-muted-light hover:text-brand-cream transition-colors no-underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-brand-cream mb-4">
              Company
            </h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {['Our Story', 'Sustainability', 'Press', 'Careers'].map(item => (
                <li key={item}>
                  <Link to="/" className="font-sans text-sm text-brand-muted-light hover:text-brand-cream transition-colors no-underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-graphite flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-brand-muted-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(card => (
              <span key={card} className="font-sans text-[10px] uppercase tracking-wider text-brand-muted-light border border-brand-graphite px-2 py-1">
                {card}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
              <a key={social} href="#" className="font-sans text-xs text-brand-muted-light hover:text-brand-cream transition-colors no-underline">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
