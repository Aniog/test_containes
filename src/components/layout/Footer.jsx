import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-serif font-bold tracking-tighter block mb-6">
              ARTITECT<span className="text-brand-gold">MACHINERY</span>
            </span>
            <p className="text-brand-light/40 max-w-sm leading-relaxed text-sm">
              Global leader in specialized sheet metal folding technology. Providing elegant, precision-engineered machinery for architectural and industrial manufacturing since 2011.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-gold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-brand-light/60">
              <p>Inquiry: sales@artitectmachinery.com</p>
              <p>Support: tech@artitectmachinery.com</p>
              <p>Global: +44 20 7946 0958</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-gold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4 text-sm text-brand-light/60">
              <a href="#products" className="hover:text-brand-gold">Our Machines</a>
              <a href="#about" className="hover:text-brand-gold">Process</a>
              <a href="#contact" className="hover:text-brand-gold">Support</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
          <p>© 2026 Artitect Machinery. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
