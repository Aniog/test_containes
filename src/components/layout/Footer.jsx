import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 16.5a4 4 0 0 0 8 0v-9a4 4 0 0 0-8 0v9z" />
    <line x1="12" x2="12" y1="2" y2="22" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. Gold-plated pieces designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold-light transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-taupe hover:text-gold-light transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-taupe hover:text-gold-light transition-colors" aria-label="Pinterest">
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-gold-light mb-4">
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-taupe hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-taupe hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-taupe hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-gold-light mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-wider uppercase text-gold-light mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Affiliates</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-white transition-colors">Wholesale</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-taupe">Visa</span>
            <span className="text-xs text-taupe">Mastercard</span>
            <span className="text-xs text-taupe">Amex</span>
            <span className="text-xs text-taupe">PayPal</span>
            <span className="text-xs text-taupe">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}