import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tighter">AM</span>
              </div>
              <span className="text-white font-semibold tracking-tight">ARTITECT MACHINERY</span>
            </div>
            <p className="text-sm">Precision folding equipment since 1987.</p>
          </div>

          <div className="text-sm space-y-1 md:text-right">
            <div>1240 Industrial Parkway</div>
            <div>Cleveland, Ohio 44114, USA</div>
            <div className="pt-2">© {currentYear} Artitect Machinery Co. All rights reserved.</div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row gap-4 md:gap-8 text-slate-500">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Warranty Information</div>
          <div className="md:ml-auto">Built for the craftsmen who build the world.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
