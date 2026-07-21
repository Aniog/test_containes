import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F5F1] border-t border-[#C4B8A8] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-[#1C1917]">
              VELMORA
            </Link>
            <p className="text-xs text-[#8A8178] mt-3 tracking-wide">
              Fine jewelry for everyday.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#1C1917] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-[#4A4640]">
              <li><Link to="/shop" className="hover:text-[#A67C52]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#A67C52]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#A67C52]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#A67C52]">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-[#A67C52]">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#1C1917] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-[#4A4640]">
              <li><a href="#" className="hover:text-[#A67C52]">Shipping</a></li>
              <li><a href="#" className="hover:text-[#A67C52]">Returns</a></li>
              <li><a href="#" className="hover:text-[#A67C52]">Care Guide</a></li>
              <li><a href="#" className="hover:text-[#A67C52]">Size Guide</a></li>
              <li><a href="#" className="hover:text-[#A67C52]">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#1C1917] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#4A4640]">
              <li><Link to="/about" className="hover:text-[#A67C52]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#A67C52]">Journal</Link></li>
              <li><a href="#" className="hover:text-[#A67C52]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#A67C52]">Careers</a></li>
              <li><a href="#" className="hover:text-[#A67C52]">Press</a></li>
            </ul>
          </div>

          {/* Social & Payments */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs tracking-[2px] text-[#1C1917] mb-4">FOLLOW</h4>
            <div className="flex gap-4 text-sm text-[#4A4640] mb-8">
              <a href="#" className="hover:text-[#A67C52]">IG</a>
              <a href="#" className="hover:text-[#A67C52]">TT</a>
              <a href="#" className="hover:text-[#A67C52]">PI</a>
            </div>

            <div className="text-[10px] tracking-[1px] text-[#8A8178]">
              <p>WE ACCEPT</p>
              <div className="flex gap-3 mt-2 text-[#4A4640]">
                <span>VISA</span>
                <span>MC</span>
                <span>AMEX</span>
                <span>PP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#C4B8A8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A8178] tracking-[1px]">
          <p>© {currentYear} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1C1917]">PRIVACY</a>
            <a href="#" className="hover:text-[#1C1917]">TERMS</a>
            <a href="#" className="hover:text-[#1C1917]">ACCESSIBILITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
