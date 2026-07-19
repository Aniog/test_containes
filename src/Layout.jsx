import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8]">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 flex items-center justify-between",
          isScrolled || !isHome ? "bg-white shadow-sm" : "bg-transparent text-white"
        )}
      >
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl tracking-wider">VELMORA</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-12">
                <Link to="/shop" className="text-xl font-serif tracking-widest uppercase">Shop</Link>
                <Link to="/collections" className="text-xl font-serif tracking-widest uppercase">Collections</Link>
                <Link to="/about" className="text-xl font-serif tracking-widest uppercase">About</Link>
                <Link to="/journal" className="text-xl font-serif tracking-widest uppercase">Journal</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="uppercase tracking-[0.2em] text-[10px] font-medium hover:text-[#C5A059] transition-colors">Shop</Link>
            <Link to="/collections" className="uppercase tracking-[0.2em] text-[10px] font-medium hover:text-[#C5A059] transition-colors">Collections</Link>
          </nav>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif tracking-[0.3em] font-light">
          VELMORA
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-8 mr-8">
            <Link to="/about" className="uppercase tracking-[0.2em] text-[10px] font-medium hover:text-[#C5A059] transition-colors">About</Link>
            <Link to="/journal" className="uppercase tracking-[0.2em] text-[10px] font-medium hover:text-[#C5A059] transition-colors">Journal</Link>
          </nav>
          <button className="hover:text-[#C5A059] transition-colors">
            <Search className="w-5 h-5 font-light" />
          </button>
          <button className="hover:text-[#C5A059] transition-colors relative">
            <ShoppingBag className="w-5 h-5 font-light" />
            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#1A1A1A] text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif tracking-[0.3em] font-light mb-8">VELMORA</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry for the modern woman. Crafted with intention, designed to be treasured forever.
            </p>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-[11px] font-bold mb-6">Shop</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?cat=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?cat=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?cat=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-[11px] font-bold mb-6">Help</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Care Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Custom House</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-[11px] font-bold mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Stockists</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest">
            © 2026 Velmora Fine Jewelry. All Rights Reserved.
          </div>
          <div className="flex gap-6">
             <div className="w-8 h-5 bg-gray-800 rounded-sm opacity-50" />
             <div className="w-8 h-5 bg-gray-800 rounded-sm opacity-50" />
             <div className="w-8 h-5 bg-gray-800 rounded-sm opacity-50" />
             <div className="w-8 h-5 bg-gray-800 rounded-sm opacity-50" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
