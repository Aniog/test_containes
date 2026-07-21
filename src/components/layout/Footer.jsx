import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-background border-t hairline pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif tracking-[0.2em] font-bold">VELMORA</h3>
            <p className="text-[14px] leading-relaxed text-muted-foreground mr-6">
              Modern heirlooms crafted for the contemporary woman. Our jewelry celebrates refined artistry and accessible luxury.
            </p>
            <div className="flex space-x-6">
              <Instagram size={20} strokeWidth={1} className="hover:text-accent cursor-pointer transition-colors" />
              <Facebook size={20} strokeWidth={1} className="hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={20} strokeWidth={1} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Shop</h4>
            <ul className="space-y-5 text-[14px] text-muted-foreground">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Help</h4>
            <ul className="space-y-5 text-[14px] text-muted-foreground">
              <li><Link to="/#shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/#size-guide" className="hover:text-accent transition-colors">Size Guide</Link></li>
              <li><Link to="/#care" className="hover:text-accent transition-colors">Care Instructions</Link></li>
              <li><Link to="/#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h4>
            <div className="space-y-6">
              <p className="text-[14px] text-muted-foreground italic">Sign up for exclusive offers and updates.</p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-b hairline py-2 w-full text-[14px] focus:outline-none focus:border-accent transition-colors"
                />
                <button className="bg-primary text-primary-foreground py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-luxury">
                  Join The Club
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-10 hairline bg-muted-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY.
          </p>
          <div className="flex space-x-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-luxury">
             <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-4" />
             <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-4" />
             <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
