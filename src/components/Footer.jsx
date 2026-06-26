import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-[#0A1628] font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-white text-lg tracking-tight">ARTITECT</div>
                <div className="text-[10px] text-white/50 -mt-1 tracking-[2px]">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Precision-engineered folding solutions for modern metal fabrication.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4 text-sm tracking-wide">PRODUCTS</h5>
            <ul className="space-y-2 text-sm">
              <li>Double Folding Machines</li>
              <li>Sheet Metal Folders</li>
              <li>Metal Folding Machines</li>
              <li>Custom Fabrication Equipment</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4 text-sm tracking-wide">CONTACT</h5>
            <ul className="space-y-2 text-sm">
              <li>info@artitectmachinery.com</li>
              <li>+1 (800) 555-0199</li>
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-center">
          © {currentYear} Artitect Machinery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
