import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2823] text-[#F8F5F1] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          <div>
            <div className="serif text-2xl tracking-[0.15em] mb-6">VELMORA</div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4">Shop</div>
            <div className="space-y-2 text-sm text-[#C5B8A8]">
              <div><Link to="/shop" className="hover:text-white">All Jewelry</Link></div>
              <div><Link to="/shop" className="hover:text-white">Earrings</Link></div>
              <div><Link to="/shop" className="hover:text-white">Necklaces</Link></div>
              <div><Link to="/shop" className="hover:text-white">Huggies</Link></div>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4">Help</div>
            <div className="space-y-2 text-sm text-[#C5B8A8]">
              <div><a href="#" className="hover:text-white">Shipping</a></div>
              <div><a href="#" className="hover:text-white">Returns</a></div>
              <div><a href="#" className="hover:text-white">Care Guide</a></div>
              <div><a href="#" className="hover:text-white">Contact</a></div>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4">Company</div>
            <div className="space-y-2 text-sm text-[#C5B8A8]">
              <div><a href="#" className="hover:text-white">Our Story</a></div>
              <div><a href="#" className="hover:text-white">Journal</a></div>
              <div><a href="#" className="hover:text-white">Sustainability</a></div>
              <div><a href="#" className="hover:text-white">Stockists</a></div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4A4640] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A857C]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <div>18K Gold Plated · Hypoallergenic</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;