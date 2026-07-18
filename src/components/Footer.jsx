import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-cream">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-cream/60 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wide-btn uppercase text-cream/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="font-sans text-sm text-cream/70 hover:text-gold transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="font-sans text-sm text-cream/70 hover:text-gold transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="font-sans text-sm text-cream/70 hover:text-gold transition-colors duration-300">Huggies</Link></li>
              <li><Link to="/shop" className="font-sans text-sm text-cream/70 hover:text-gold transition-colors duration-300">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wide-btn uppercase text-cream/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="font-sans text-sm text-cream/70">Shipping & Returns</span></li>
              <li><span className="font-sans text-sm text-cream/70">Size Guide</span></li>
              <li><span className="font-sans text-sm text-cream/70">Care Instructions</span></li>
              <li><span className="font-sans text-sm text-cream/70">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wide-btn uppercase text-cream/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="font-sans text-sm text-cream/70">Our Story</span></li>
              <li><span className="font-sans text-sm text-cream/70">Sustainability</span></li>
              <li><span className="font-sans text-sm text-cream/70">Press</span></li>
              <li><span className="font-sans text-sm text-cream/70">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-cream/40">Visa</span>
            <span className="font-sans text-xs text-cream/40">Mastercard</span>
            <span className="font-sans text-xs text-cream/40">Amex</span>
            <span className="font-sans text-xs text-cream/40">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-cream/50 hover:text-gold cursor-pointer transition-colors duration-300">Instagram</span>
            <span className="font-sans text-xs text-cream/50 hover:text-gold cursor-pointer transition-colors duration-300">Pinterest</span>
            <span className="font-sans text-xs text-cream/50 hover:text-gold cursor-pointer transition-colors duration-300">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
