import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight text-white">ARTITECT</div>
                <div className="text-[10px] text-white/50 -mt-1.5 tracking-[3px]">MACHINERY</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Precision-engineered metal folding solutions for manufacturers who demand excellence. 
              Built for performance. Designed for people.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="font-semibold text-white mb-4 tracking-wide">PRODUCTS</div>
              <ul className="space-y-2 text-white/70">
                <li>Double Folding Machines</li>
                <li>Sheet Metal Folders</li>
                <li>Metal Folding Systems</li>
                <li>Custom Solutions</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-4 tracking-wide">COMPANY</div>
              <ul className="space-y-2 text-white/70">
                <li>Engineering Excellence</li>
                <li>Global Support</li>
                <li>Training & Service</li>
                <li>Parts & Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
