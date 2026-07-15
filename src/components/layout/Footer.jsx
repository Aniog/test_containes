import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Crafted for the modern woman. Demi-fine jewelry that bridges the gap between everyday and extraordinary.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-white/80 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-brand-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-white/80 mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-white/60">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60">Size Guide</span></li>
              <li><span className="text-sm text-white/60">Care Instructions</span></li>
              <li><span className="text-sm text-white/60">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-white/80 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-white/60">Sustainability</span></li>
              <li><span className="text-sm text-white/60">Press</span></li>
              <li><span className="text-sm text-white/60">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40 uppercase tracking-wider">Visa</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">Mastercard</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">Amex</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">PayPal</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hover:text-brand-gold transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-white/40 hover:text-brand-gold transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-white/40 hover:text-brand-gold transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
