import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--velmora-bg-dark)] text-[var(--velmora-cream)] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-xl tracking-[0.25em] text-white">VELMORA</Link>
            <p className="text-xs text-white/50 mt-3 tracking-widest">EST 2019</p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white/60">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white/60">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="footer-link">Shipping</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
              <li><a href="#" className="footer-link">Care Guide</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white/60">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#" className="footer-link">Sustainability</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 tracking-widest">
          <div>© {currentYear} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</div>
          
          <div className="flex items-center gap-6">
            <span>WE ACCEPT</span>
            <div className="flex gap-3 text-[10px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">PIN</a>
            <a href="#" className="hover:text-white transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
