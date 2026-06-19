import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 px-6 md:px-12 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <h2 className="font-serif text-2xl tracking-[0.1em] mb-6">VELMORA</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. 18K gold plated, waterproof, and hypoallergenic.
          </p>
          <div className="flex gap-4 mt-6">
            <Instagram className="w-4 h-4 cursor-pointer hover:opacity-60" />
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-60" />
            <Twitter className="w-4 h-4 cursor-pointer hover:opacity-60" />
          </div>
        </div>

        <div>
          <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] mb-6 text-muted-foreground">Shop</h3>
          <ul className="flex flex-col gap-4 text-sm font-sans uppercase tracking-widest">
            <li><Link to="/shop?category=earrings" className="hover:opacity-60">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:opacity-60">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:opacity-60">Huggies</Link></li>
            <li><Link to="/shop?category=sets" className="hover:opacity-60">Gift Sets</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] mb-6 text-muted-foreground">Help</h3>
          <ul className="flex flex-col gap-4 text-sm font-sans uppercase tracking-widest">
            <li><Link to="/shipping" className="hover:opacity-60">Shipping</Link></li>
            <li><Link to="/returns" className="hover:opacity-60">Returns</Link></li>
            <li><Link to="/care" className="hover:opacity-60">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:opacity-60">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] mb-6 text-muted-foreground">Company</h3>
          <ul className="flex flex-col gap-4 text-sm font-sans uppercase tracking-widest">
            <li><Link to="/about" className="hover:opacity-60">About Us</Link></li>
            <li><Link to="/sustainability" className="hover:opacity-60">Sustainability</Link></li>
            <li><Link to="/terms" className="hover:opacity-60">Terms</Link></li>
            <li><Link to="/privacy" className="hover:opacity-60">Privacy</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2024 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 items-center grayscale opacity-60">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Apple_Pay_logo.svg" alt="Apple Pay" className="h-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
