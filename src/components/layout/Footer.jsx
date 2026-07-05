import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[#b8860b] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#b8860b] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#b8860b] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#b8860b] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase mb-6">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[0.15em] uppercase mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span key={card} className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/60">
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
