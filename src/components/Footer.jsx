import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-cream transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-brand-muted-light">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-muted-light">Size Guide</span></li>
              <li><span className="text-sm text-brand-muted-light">Care Instructions</span></li>
              <li><span className="text-sm text-brand-muted-light">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-brand-muted-light">Our Story</span></li>
              <li><span className="text-sm text-brand-muted-light">Sustainability</span></li>
              <li><span className="text-sm text-brand-muted-light">Press</span></li>
              <li><span className="text-sm text-brand-muted-light">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-brand-muted-light font-medium">Visa</span>
            <span className="text-xs text-brand-muted-light font-medium">Mastercard</span>
            <span className="text-xs text-brand-muted-light font-medium">Amex</span>
            <span className="text-xs text-brand-muted-light font-medium">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-muted-light hover:text-brand-cream cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-brand-muted-light hover:text-brand-cream cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-brand-muted-light hover:text-brand-cream cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
