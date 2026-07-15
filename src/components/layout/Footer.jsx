import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-brand-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-light-muted leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-brand-cream">Shop</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-light-muted hover:text-brand-cream transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-brand-cream">Help</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-brand-cream">Company</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Our Story</span></li>
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Press</span></li>
              <li><span className="text-sm text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-light-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-light-muted">Visa</span>
            <span className="text-xs text-brand-light-muted">Mastercard</span>
            <span className="text-xs text-brand-light-muted">Amex</span>
            <span className="text-xs text-brand-light-muted">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Instagram</span>
            <span className="text-xs text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">Pinterest</span>
            <span className="text-xs text-brand-light-muted cursor-pointer hover:text-brand-cream transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
