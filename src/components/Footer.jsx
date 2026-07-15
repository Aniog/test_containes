import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#F5F3EF] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-6">VELMORA</div>
          </div>
          
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#BFA46F]">Shop</div>
            <div className="space-y-2 text-sm text-[#B8B0A5]">
              <div><Link to="/shop" className="hover:text-white">All Jewelry</Link></div>
              <div><Link to="/shop" className="hover:text-white">Earrings</Link></div>
              <div><Link to="/shop" className="hover:text-white">Necklaces</Link></div>
              <div><Link to="/shop" className="hover:text-white">Huggies</Link></div>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#BFA46F]">Help</div>
            <div className="space-y-2 text-sm text-[#B8B0A5]">
              <div><a href="#" className="hover:text-white">Shipping</a></div>
              <div><a href="#" className="hover:text-white">Returns</a></div>
              <div><a href="#" className="hover:text-white">Care Guide</a></div>
              <div><a href="#" className="hover:text-white">Size Guide</a></div>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#BFA46F]">Company</div>
            <div className="space-y-2 text-sm text-[#B8B0A5]">
              <div><a href="#" className="hover:text-white">Our Story</a></div>
              <div><a href="#" className="hover:text-white">Journal</a></div>
              <div><a href="#" className="hover:text-white">Stockists</a></div>
              <div><a href="#" className="hover:text-white">Contact</a></div>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#BFA46F]">Follow</div>
            <div className="space-y-2 text-sm text-[#B8B0A5]">
              <div><a href="#" className="hover:text-white">Instagram</a></div>
              <div><a href="#" className="hover:text-white">Pinterest</a></div>
              <div><a href="#" className="hover:text-white">TikTok</a></div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B8178]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Visa</span><span>Mastercard</span><span>Amex</span><span>PayPal</span><span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;