import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-[#3A3A3A]">
          <div>
            <div className="serif text-2xl tracking-[0.2em] text-white mb-6">VELMORA</div>
          </div>
          
          <div>
            <div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">Shop</div>
            <div className="space-y-2">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">Help</div>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">Company</div>
            <div className="space-y-2">
              <Link to="/about" className="block hover:text-white">Our Story</Link>
              <Link to="/journal" className="block hover:text-white">Journal</Link>
              <a href="#" className="block hover:text-white">Sustainability</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <div className="flex gap-4 text-[#C5A26F]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;