import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider">VELMORA</Link>
            <p className="mt-4 text-dark-muted text-sm leading-relaxed">
              Crafted for the modern woman. Demi-fine jewelry that celebrates quiet luxury and timeless elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-dark-muted font-sans font-medium">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-bronze transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-bronze transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-bronze transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-bronze transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-dark-muted font-sans font-medium">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-bronze transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-dark-muted font-sans font-medium">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-bronze transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-bronze transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-muted text-xs">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-dark-muted text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
          <div className="flex items-center gap-4 text-dark-muted">
            <a href="#" className="hover:text-white transition-colors text-xs">Instagram</a>
            <a href="#" className="hover:text-white transition-colors text-xs">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors text-xs">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
