import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-white no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-warm-gray leading-relaxed font-sans">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold mb-4 font-medium">Shop</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-white transition-colors no-underline font-sans">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-white transition-colors no-underline font-sans">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-white transition-colors no-underline font-sans">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-white transition-colors no-underline font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-white transition-colors no-underline font-sans">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold mb-4 font-medium">Help</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Size Guide</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Care Instructions</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">FAQ</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold mb-4 font-medium">Company</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Our Story</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Sustainability</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Journal</span></li>
              <li><span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-warm-gray font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-warm-gray font-sans">Visa</span>
            <span className="text-xs text-brand-warm-gray font-sans">Mastercard</span>
            <span className="text-xs text-brand-warm-gray font-sans">Amex</span>
            <span className="text-xs text-brand-warm-gray font-sans">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Instagram</span>
            <span className="text-xs text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">Pinterest</span>
            <span className="text-xs text-brand-warm-gray hover:text-white transition-colors cursor-pointer font-sans">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
