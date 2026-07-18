import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-espresso text-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-linen no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-product font-sans font-medium text-linen mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-stone hover:text-gold transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-stone hover:text-gold transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone hover:text-gold transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone hover:text-gold transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-product font-sans font-medium text-linen mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-product font-sans font-medium text-linen mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm text-stone hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone">Visa</span>
            <span className="text-xs text-stone">Mastercard</span>
            <span className="text-xs text-stone">Amex</span>
            <span className="text-xs text-stone">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
