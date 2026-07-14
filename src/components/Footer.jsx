import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/80" style={{ backgroundColor: '#1C1917' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values quiet luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-sans font-medium text-white mb-4">Shop</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-sans font-medium text-white mb-4">Help</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-sans font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline">Our Story</Link></li>
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">Press</span></li>
              <li><span className="text-sm text-white/60 cursor-pointer hover:text-gold-light transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
