import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/90">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-section text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-light text-cream/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-product font-medium text-cream/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm font-light text-cream/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm font-light text-cream/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm font-light text-cream/70 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm font-light text-cream/70 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-product font-medium text-cream/40 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm font-light text-cream/70">Shipping & Returns</span></li>
              <li><span className="text-sm font-light text-cream/70">Size Guide</span></li>
              <li><span className="text-sm font-light text-cream/70">Care Instructions</span></li>
              <li><span className="text-sm font-light text-cream/70">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-product font-medium text-cream/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm font-light text-cream/70 hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm font-light text-cream/70">Sustainability</span></li>
              <li><span className="text-sm font-light text-cream/70">Press</span></li>
              <li><span className="text-sm font-light text-cream/70">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40 font-light">Visa</span>
            <span className="text-xs text-cream/40 font-light">Mastercard</span>
            <span className="text-xs text-cream/40 font-light">Amex</span>
            <span className="text-xs text-cream/40 font-light">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40 font-light hover:text-cream/70 cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-cream/40 font-light hover:text-cream/70 cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-cream/40 font-light hover:text-cream/70 cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
