import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-super text-white">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Premium materials, accessible prices, timeless design.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <SocialIcon><Instagram className="w-4 h-4" /></SocialIcon>
              <SocialIcon><Facebook className="w-4 h-4" /></SocialIcon>
              <SocialIcon><Twitter className="w-4 h-4" /></SocialIcon>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Shop</h4>
            <div className="flex flex-col gap-3">
              <FooterLink to="/shop">All Jewelry</FooterLink>
              <FooterLink to="/shop?category=Earrings">Earrings</FooterLink>
              <FooterLink to="/shop?category=Necklaces">Necklaces</FooterLink>
              <FooterLink to="/shop?category=Huggies">Huggies</FooterLink>
              <FooterLink to="/shop?category=Sets">Gift Sets</FooterLink>
            </div>
          </div>

          {/* Help */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Help</h4>
            <div className="flex flex-col gap-3">
              <FooterLink to="/shipping">Shipping & Delivery</FooterLink>
              <FooterLink to="/returns">Returns & Exchanges</FooterLink>
              <FooterLink to="/care">Jewelry Care</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/size-guide">Size Guide</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              <FooterLink to="/about">Our Story</FooterLink>
              <FooterLink to="/journal">Journal</FooterLink>
              <FooterLink to="/sustainability">Sustainability</FooterLink>
              <FooterLink to="/stores">Stores</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <PaymentBadge>VISA</PaymentBadge>
            <PaymentBadge>MC</PaymentBadge>
            <PaymentBadge>AMEX</PaymentBadge>
            <PaymentBadge>PAYPAL</PaymentBadge>
          </div>

          <p className="text-white/20 text-[10px] tracking-wide flex items-center gap-1">
            Made with <Heart className="w-2.5 h-2.5 text-velmora-rose" /> for everyday elegance
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children }) {
  return (
    <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300">
      {children}
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="text-white/50 text-sm hover:text-velmora-gold transition-colors duration-300">
      {children}
    </Link>
  );
}

function PaymentBadge({ children }) {
  return (
    <span className="text-[10px] tracking-widest text-white/25 border border-white/15 px-2 py-1 rounded-sm">
      {children}
    </span>
  );
}
