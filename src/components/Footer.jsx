import React from 'react';
import { ShoppingBag, Star, Package, RefreshCw, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-24">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <span className="text-3xl font-serif tracking-[0.2em] font-medium">VELMORA</span>
          <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs">
            Timeless jewelry designed for the modern woman. Elevated essentials crafted with intention.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
              <a key={social} href="#" className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#D4AF37] transition-colors">{social}</a>
            ))}
          </div>
        </div>

        {/* Shop Column */}
        <div className="flex flex-col gap-6 text-sm tracking-widest font-medium uppercase text-[#1A1A1A]">
          <h4 className="text-xs text-[#6B6B6B]">Shop</h4>
          <a href="/shop" className="hover:text-[#D4AF37] transition-colors w-fit">All Jewelry</a>
          <a href="/collections" className="hover:text-[#D4AF37] transition-colors w-fit">Collections</a>
          <a href="/shop?category=Earrings" className="hover:text-[#D4AF37] transition-colors w-fit">Earrings</a>
          <a href="/shop?category=Necklaces" className="hover:text-[#D4AF37] transition-colors w-fit">Necklaces</a>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-6 text-sm tracking-widest font-medium uppercase text-[#1A1A1A]">
          <h4 className="text-xs text-[#6B6B6B]">Support</h4>
          <a href="#" className="hover:text-[#D4AF37] transition-colors w-fit">Shipping</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors w-fit">Returns</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors w-fit">Sizing Guide</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors w-fit">Contact</a>
        </div>

        {/* Brand Column 2 */}
        <div className="flex flex-col gap-6 text-sm tracking-widest font-medium uppercase text-[#1A1A1A]">
          <h4 className="text-xs text-[#6B6B6B]">Company</h4>
          <a href="/about" className="hover:text-[#D4AF37] transition-colors w-fit">Our Story</a>
          <a href="/journal" className="hover:text-[#D4AF37] transition-colors w-fit">Journal</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors w-fit">Ethical Sourcing</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors w-fit">Wholesale</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] tracking-widest uppercase text-[#6B6B6B]">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 grayscale opacity-50">
          {/* Payment Icons Placeholder */}
          <div className="h-6 w-10 border border-[#E5E5E5] bg-slate-50" />
          <div className="h-6 w-10 border border-[#E5E5E5] bg-slate-50" />
          <div className="h-6 w-10 border border-[#E5E5E5] bg-slate-50" />
          <div className="h-6 w-10 border border-[#E5E5E5] bg-slate-50" />
        </div>
      </div>
    </footer>
  );
}
