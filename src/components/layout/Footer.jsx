import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-wider text-[#faf8f5]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#6b6b6b] leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#6b6b6b] hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[#6b6b6b] hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[#6b6b6b] hover:text-[#c9a96e] transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[#6b6b6b] hover:text-[#c9a96e] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#faf8f5] mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#faf8f5] mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#faf8f5] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[#6b6b6b] hover:text-[#c9a96e] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6b6b6b]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#6b6b6b]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span
                  key={card}
                  className="px-2 py-1 bg-[#1a1a1a] text-[#6b6b6b] text-[10px] rounded"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
