import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/60">Shop</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><Link to="/shop?category=earrings" className="hover:text-white">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/60">Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Materials & Care</span></li>
              <li><span className="cursor-default">Contact</span></li>
              <li><span className="cursor-default">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/60">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Press</span></li>
              <li><span className="cursor-default">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white/70">
            <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
            <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
