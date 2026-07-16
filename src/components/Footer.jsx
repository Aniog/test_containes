import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-border-dark">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-muted-foreground">Crafted with intention since 2019.</p>
          </div>
          
          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">SHOP</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/shop" className="block hover:text-surface">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="block hover:text-surface">Earrings</Link>
              <Link to="/shop?category=necklaces" className="block hover:text-surface">Necklaces</Link>
              <Link to="/shop?category=huggies" className="block hover:text-surface">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">HELP</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-surface">Shipping</a>
              <a href="#" className="block hover:text-surface">Returns</a>
              <a href="#" className="block hover:text-surface">Care Guide</a>
              <a href="#" className="block hover:text-surface">Size Guide</a>
            </div>
          </div>

          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">COMPANY</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/about" className="block hover:text-surface">Our Story</Link>
              <Link to="/journal" className="block hover:text-surface">Journal</Link>
              <a href="#" className="block hover:text-surface">Sustainability</a>
              <a href="#" className="block hover:text-surface">Contact</a>
            </div>
          </div>

          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">FOLLOW</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-surface">Instagram</a>
              <a href="#" className="block hover:text-surface">Pinterest</a>
              <a href="#" className="block hover:text-surface">TikTok</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex gap-3">
            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
