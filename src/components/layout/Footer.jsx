import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wide">
              VELMORA
            </Link>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 mb-4 font-sans">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/80 hover:text-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/80 hover:text-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/80 hover:text-gold-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/80 hover:text-gold-light transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 mb-4 font-sans">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 mb-4 font-sans">Company</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Our Story</span></li>
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Press</span></li>
              <li><span className="text-sm text-white/80 cursor-pointer hover:text-gold-light transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/60">Visa</span>
            <span className="text-xs text-white/60">Mastercard</span>
            <span className="text-xs text-white/60">Amex</span>
            <span className="text-xs text-white/60">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/70 hover:text-gold-light cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-white/70 hover:text-gold-light cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-white/70 hover:text-gold-light cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
