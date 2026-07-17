import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Press</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
