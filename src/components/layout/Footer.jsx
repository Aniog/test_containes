import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-cream/80">Shop</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><Link to="/collection" className="text-sm text-cream/60 no-underline hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/collection" className="text-sm text-cream/60 no-underline hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/collection" className="text-sm text-cream/60 no-underline hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/collection" className="text-sm text-cream/60 no-underline hover:text-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-cream/80">Help</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-cream/80">Company</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Our Story</span></li>
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Journal</span></li>
              <li><span className="text-sm text-cream/60 cursor-pointer hover:text-cream transition-colors">Contact</span></li>
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
            <span className="text-xs text-cream/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
