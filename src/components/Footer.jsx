import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
            <h3 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h3>
            <p className="text-secondary/70 text-sm leading-relaxed max-w-xs">
              Crafting demi-fine jewelry that brings quiet luxury to your every day. Designed to be lived in, loved, and layered.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">All Jewelry</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Earrings</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Necklaces</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Huggies</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Gifts</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-accent">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-secondary/80 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-secondary/60">
            {/* Payment icons placeholder */}
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
