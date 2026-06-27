import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/collection" className="hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection?category=earrings" className="hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collection?category=necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collection?category=huggies" className="hover:text-brand-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4 text-white/40">
            <a href="#" className="hover:text-brand-gold transition-colors text-xs">Instagram</a>
            <a href="#" className="hover:text-brand-gold transition-colors text-xs">Pinterest</a>
            <a href="#" className="hover:text-brand-gold transition-colors text-xs">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
