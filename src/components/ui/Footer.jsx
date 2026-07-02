import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-bg pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="serif text-2xl tracking-[0.15em] font-medium text-bg">
              VELMORA
            </Link>
            <p className="text-xs text-white/50 mt-3 tracking-widest">EST 2019</p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-xs tracking-[0.1em] text-white/50 mb-4">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link block">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link block">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link block">Huggies</Link>
              <Link to="/shop?category=Sets" className="footer-link block">Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <p className="text-xs tracking-[0.1em] text-white/50 mb-4">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="footer-link block">Shipping</a>
              <a href="#returns" className="footer-link block">Returns</a>
              <a href="#care" className="footer-link block">Jewelry Care</a>
              <a href="#contact" className="footer-link block">Contact Us</a>
              <a href="#faq" className="footer-link block">FAQ</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-[0.1em] text-white/50 mb-4">COMPANY</p>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="footer-link block">Our Story</Link>
              <Link to="/journal" className="footer-link block">Journal</Link>
              <a href="#sustainability" className="footer-link block">Sustainability</a>
              <a href="#press" className="footer-link block">Press</a>
              <a href="#careers" className="footer-link block">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
          
          <div className="flex items-center gap-4">
            <span>WE ACCEPT</span>
            <div className="flex gap-3 text-white/70">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#instagram" className="hover:text-white">IG</a>
            <a href="#pinterest" className="hover:text-white">PT</a>
            <a href="#tiktok" className="hover:text-white">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;