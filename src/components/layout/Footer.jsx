import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12">
          {/* Logo */}
          <div>
            <div className="logo text-white mb-4">VELMORA</div>
            <p className="text-sm text-white/60">Fine jewelry, thoughtfully crafted.</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-white">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Care Guide</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white">Journal</Link></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="divider bg-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <div>Visa · Mastercard · Amex · Apple Pay</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;