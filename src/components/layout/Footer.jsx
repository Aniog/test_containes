import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wide text-brand-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-light-muted leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase mb-4 text-brand-cream">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase mb-4 text-brand-cream">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase mb-4 text-brand-cream">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/about" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Our Story</Link></li>
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-light-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-light-muted">Visa</span>
            <span className="text-xs text-brand-light-muted">Mastercard</span>
            <span className="text-xs text-brand-light-muted">Amex</span>
            <span className="text-xs text-brand-light-muted">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
