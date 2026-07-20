import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hairline bg-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-wide-custom text-[#1c1917]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#5c5650]">
              Demi-fine jewelry crafted to be treasured. Designed in small batches with intention.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-[#5c5650] hover:text-[#1c1917]"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-[#5c5650] hover:text-[#1c1917]"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-[#5c5650] hover:text-[#1c1917]"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Shop</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#5c5650]">
              <li><Link to="/shop?category=earrings" className="hover:text-[#1c1917]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#1c1917]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#1c1917]">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-[#1c1917]">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#5c5650]">
              <li><a href="#" className="hover:text-[#1c1917]">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#1c1917]">Materials & Care</a></li>
              <li><a href="#" className="hover:text-[#1c1917]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#1c1917]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wide-custom text-[#1c1917]">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#5c5650]">
              <li><Link to="/about" className="hover:text-[#1c1917]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#1c1917]">Journal</Link></li>
              <li><a href="#" className="hover:text-[#1c1917]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#1c1917]">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 hairline pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[#8a827a]">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-[#8a827a]">
              <a href="#" className="hover:text-[#1c1917]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1c1917]">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
