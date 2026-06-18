import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors duration-300">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors duration-300">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white mb-4">Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">Our Story</Link></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Instagram</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Pinterest</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
