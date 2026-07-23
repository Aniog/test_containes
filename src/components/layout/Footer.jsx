import { Link } from 'react-router-dom';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12a4 4 0 0 1 4-4h.5" />
    <path d="M12 8v8" />
    <path d="m12 8 .45-1.04A4 4 0 0 1 16 4.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Premium materials, accessible luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-white/70 mb-5">Shop</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="hover:text-gold transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="hover:text-gold transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="hover:text-gold transition-colors">Huggies</Link>
              <Link to="/shop?category=Sets" className="hover:text-gold transition-colors">Gift Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-white/70 mb-5">Help</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-gold transition-colors">Size Guide</a>
              <a href="#" className="hover:text-gold transition-colors">Jewelry Care</a>
              <a href="#" className="hover:text-gold transition-colors">FAQ</a>
              <a href="#" className="hover:text-gold transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-white/70 mb-5">Company</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <a href="#" className="hover:text-gold transition-colors">Our Story</a>
              <a href="#" className="hover:text-gold transition-colors">Sustainability</a>
              <a href="#" className="hover:text-gold transition-colors">Journal</a>
              <a href="#" className="hover:text-gold transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 hairline-divider flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 tracking-wider">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="text-white/40 hover:text-gold transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/40 hover:text-gold transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="text-white/40 hover:text-gold transition-colors">
              <PinterestIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
