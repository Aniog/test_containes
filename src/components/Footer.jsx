import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1816] text-[#EFEFE8] pt-16 pb-8 border-t border-[#2A2826]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.2em] font-medium uppercase mb-6 text-white text-center md:text-left">
              VELMORA
            </h3>
            <p className="text-sm text-[#A8A4A0] md:pr-8 text-center md:text-left">
              Quiet luxury demi-fine jewelry. Crafted to be treasured, designed for the everyday.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Earrings & Huggies</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-sm text-[#A8A4A0] hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#2A2826]">
          <p className="text-sm text-[#A8A4A0] mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-[#A8A4A0] hover:text-white text-sm tracking-widest uppercase">Instagram</Link>
            <Link to="#" className="text-[#A8A4A0] hover:text-white text-sm tracking-widest uppercase">Pinterest</Link>
            <Link to="#" className="text-[#A8A4A0] hover:text-white text-sm tracking-widest uppercase">TikTok</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
