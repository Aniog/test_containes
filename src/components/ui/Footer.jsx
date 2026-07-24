import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-12">
          {/* Logo */}
          <div>
            <div className="font-serif text-xl tracking-[0.12em] text-[#D4B99A] mb-4">VELMORA</div>
            <p className="text-xs text-white/50 max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="footer-col-title">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies">Huggies</Link></li>
              <li><Link to="/shop?category=sets">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="footer-col-title">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#care">Jewelry Care</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#size">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#about">Our Story</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="divider bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#accessibility">Accessibility</a>
          </div>

          <div className="flex items-center gap-4">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span> TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;