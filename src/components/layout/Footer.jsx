import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-sans text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm font-sans text-white/70 hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-sans text-white/40">Visa</span>
            <span className="text-xs font-sans text-white/40">Mastercard</span>
            <span className="text-xs font-sans text-white/40">Amex</span>
            <span className="text-xs font-sans text-white/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-sans text-white/50 hover:text-gold transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs font-sans text-white/50 hover:text-gold transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs font-sans text-white/50 hover:text-gold transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
