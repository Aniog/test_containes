import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#F8F5F0] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#8B7E6B]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-sm tracking-[0.08em] uppercase mb-4">Shop</div>
            <div className="space-y-2 text-sm text-[#8B7E6B]">
              <div><Link to="/shop">All Jewelry</Link></div>
              <div><Link to="/shop">Earrings</Link></div>
              <div><Link to="/shop">Necklaces</Link></div>
              <div><Link to="/shop">Huggies</Link></div>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-sm tracking-[0.08em] uppercase mb-4">Help</div>
            <div className="space-y-2 text-sm text-[#8B7E6B]">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm tracking-[0.08em] uppercase mb-4">Company</div>
            <div className="space-y-2 text-sm text-[#8B7E6B]">
              <div>Our Story</div>
              <div>Journal</div>
              <div>Stockists</div>
              <div>Press</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8B7E6B]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <div>Instagram</div>
            <div>Pinterest</div>
            <div>Facebook</div>
          </div>
          <div className="flex gap-4 text-xs">
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