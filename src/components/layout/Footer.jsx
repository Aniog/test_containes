import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-white/80">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join the Velmora World
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-cream text-sm uppercase tracking-wide-btn font-sans font-medium hover:bg-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-sans font-medium mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-sans font-medium mb-4">
              Help
            </h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link to="/" className="text-sm text-white/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-sans font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map(item => (
                <li key={item}>
                  <Link to="/" className="text-sm text-white/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(card => (
              <span key={card} className="text-xs text-white/30 border border-white/20 px-2 py-1 rounded-sm">
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
