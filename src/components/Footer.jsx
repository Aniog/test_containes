import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="text-lg tracking-[3px] font-semibold mb-2">ARTITECT MACHINERY</div>
            <div className="text-sm text-white/60">Precision Metal Folding Since 1987</div>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
        
        <div className="pt-8 text-xs text-white/40 flex flex-wrap gap-x-6 gap-y-2">
          <span>Headquarters: Detroit, Michigan</span>
          <span>Manufacturing: USA • Germany • Japan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;