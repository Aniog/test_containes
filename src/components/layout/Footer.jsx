import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5] pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-3xl font-light tracking-[0.2em] uppercase block mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Velmora
            </Link>
            <p className="text-sm text-[#8A8580] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday luxury.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4 text-[#C9A96E]">Shop</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-[#8A8580] hover:text-[#FAF8F5] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4 text-[#C9A96E]">Help</h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Jewelry Care', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-[#8A8580] cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4 text-[#C9A96E]">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-[#8A8580] hover:text-[#FAF8F5] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[#8A8580] hover:text-[#FAF8F5] transition-colors">Journal</Link></li>
              <li><span className="text-sm text-[#8A8580] cursor-default">Sustainability</span></li>
              <li><span className="text-sm text-[#8A8580] cursor-default">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((pay) => (
              <span key={pay} className="text-[10px] uppercase tracking-wider text-[#8A8580] border border-[#444] px-2 py-1 rounded">{pay}</span>
            ))}
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-[#8A8580] hover:text-[#C9A96E] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-[#8A8580] hover:text-[#C9A96E] transition-colors"><Facebook size={18} /></a>
          </div>

          <p className="text-xs text-[#8A8580]">
            {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  );
}
