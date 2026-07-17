import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-onyx text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extra-wide uppercase mb-5 text-brand-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-brand-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-brand-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-brand-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-brand-gold transition-colors font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extra-wide uppercase mb-5 text-brand-gold">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">FAQ</span></li>
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-extra-wide uppercase mb-5 text-brand-gold">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-brand-gold transition-colors font-sans">Our Story</Link></li>
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">Press</span></li>
              <li><span className="text-sm text-white/70 font-sans cursor-pointer hover:text-brand-gold transition-colors">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="text-[10px] font-sans font-medium tracking-wide uppercase text-white/40 border border-white/20 rounded px-2 py-1"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/40 font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
