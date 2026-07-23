import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide">VELMORA</Link>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-wider uppercase font-medium mb-4 text-white/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-brand-gold-light transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-brand-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-brand-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-brand-gold-light transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-wider uppercase font-medium mb-4 text-white/80">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-wider uppercase font-medium mb-4 text-white/80">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Contact</span></li>
              <li><span className="text-sm text-white/60 hover:text-brand-gold-light transition-colors cursor-pointer">Journal</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Apple Pay</span>
            <span className="text-xs text-white/40">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 hover:text-brand-gold-light cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-white/50 hover:text-brand-gold-light cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-white/50 hover:text-brand-gold-light cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
