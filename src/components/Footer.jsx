import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-cream/80">
      {/* Newsletter */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
            Join the Velmora World
          </h3>
          <p className="font-sans text-sm text-cream/60 mb-8 max-w-md mx-auto">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm font-sans focus:outline-none focus:border-gold-muted"
            />
            <button className="px-8 py-3 bg-gold text-cream text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-light transition-colors border-none cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl font-light tracking-wider text-cream no-underline">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-cream/50 mt-3 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/70 mb-4 font-medium">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors no-underline">Earrings</Link>
              <Link to="/shop" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors no-underline">Necklaces</Link>
              <Link to="/shop" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors no-underline">Huggies</Link>
              <Link to="/shop" className="font-sans text-sm text-cream/60 hover:text-gold transition-colors no-underline">Gift Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/70 mb-4 font-medium">Help</h4>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Shipping & Returns</span>
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Size Guide</span>
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Care Instructions</span>
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">FAQ</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/70 mb-4 font-medium">Company</h4>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Our Story</span>
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Sustainability</span>
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Press</span>
              <span className="font-sans text-sm text-cream/60 cursor-pointer hover:text-gold transition-colors">Contact</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-cream/40 uppercase tracking-wider">Visa</span>
            <span className="font-sans text-xs text-cream/40 uppercase tracking-wider">Mastercard</span>
            <span className="font-sans text-xs text-cream/40 uppercase tracking-wider">Amex</span>
            <span className="font-sans text-xs text-cream/40 uppercase tracking-wider">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-cream/50 cursor-pointer hover:text-gold transition-colors">Instagram</span>
            <span className="font-sans text-xs text-cream/50 cursor-pointer hover:text-gold transition-colors">Pinterest</span>
            <span className="font-sans text-xs text-cream/50 cursor-pointer hover:text-gold transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
