import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-product text-cream block mb-4">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-cta text-cream/40 mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/collection" className="text-sm hover:text-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection?category=earrings" className="text-sm hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/collection?category=necklaces" className="text-sm hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/collection?category=huggies" className="text-sm hover:text-cream transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-cta text-cream/40 mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-cta text-cream/40 mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm hover:text-cream transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
            <span className="text-xs text-cream/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
