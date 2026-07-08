import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream tracking-wide">VELMORA</Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-warm-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-warm-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-warm-gold-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-warm-gold-light transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4">Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-warm-gold-light transition-colors">Our Story</Link></li>
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">Press</span></li>
              <li><span className="hover:text-warm-gold-light transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
            <span className="text-xs text-cream/40">PayPal</span>
          </div>
          <div className="flex items-center gap-4 text-cream/60">
            <span className="text-xs hover:text-warm-gold-light transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs hover:text-warm-gold-light transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs hover:text-warm-gold-light transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
