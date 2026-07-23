import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2824] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="text-xs text-[#B89778] mt-3 tracking-[0.1em]">
              FINE JEWELRY
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="uppercase tracking-[0.12em] text-xs mb-4 text-[#B89778]">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B89778]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B89778]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B89778]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="uppercase tracking-[0.12em] text-xs mb-4 text-[#B89778]">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#B89778]">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#B89778]">Returns</a></li>
              <li><a href="#care" className="hover:text-[#B89778]">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#B89778]">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-[0.12em] text-xs mb-4 text-[#B89778]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778]">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778]">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#B89778]">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="divider bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#B89778]">
          <div className="flex gap-6">
            <span>© {new Date().getFullYear()} Velmora</span>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
          
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>

          <div className="flex gap-3 text-[10px] tracking-widest">
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