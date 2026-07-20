import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/40">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-brand-gold-light transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-brand-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-brand-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-brand-gold-light transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/40">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70">Size Guide</span></li>
              <li><span className="text-sm text-white/70">Care Instructions</span></li>
              <li><span className="text-sm text-white/70">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/40">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70">Our Story</span></li>
              <li><span className="text-sm text-white/70">Sustainability</span></li>
              <li><span className="text-sm text-white/70">Press</span></li>
              <li><span className="text-sm text-white/70">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 tracking-wider">VISA</span>
            <span className="text-xs text-white/40 tracking-wider">MASTERCARD</span>
            <span className="text-xs text-white/40 tracking-wider">AMEX</span>
            <span className="text-xs text-white/40 tracking-wider">PAYPAL</span>
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
