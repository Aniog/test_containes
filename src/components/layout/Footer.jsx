import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1C1917', color: 'rgba(255,255,255,0.8)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider no-underline" style={{ color: '#ffffff' }}>
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-sans font-medium mb-4" style={{ color: '#ffffff' }}>Shop</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-gold transition-colors no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-gold transition-colors no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-gold transition-colors no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-gold transition-colors no-underline" style={{ color: 'rgba(255,255,255,0.6)' }}>All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-sans font-medium mb-4" style={{ color: '#ffffff' }}>Help</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Shipping & Returns</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Size Guide</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Instructions</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-sans font-medium mb-4" style={{ color: '#ffffff' }}>Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Story</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Sustainability</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Press</span></li>
              <li><span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Visa</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Mastercard</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Apple Pay</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
