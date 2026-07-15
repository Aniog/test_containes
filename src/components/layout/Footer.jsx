import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
