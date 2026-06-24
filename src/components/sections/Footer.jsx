import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MicroCosmos</h2>
          <p className="text-sm text-slate-500">Documenting the beauty of the invisible world.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-emerald-400 transition-colors">Research</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Archives</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Ethical Guidelines</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} MicroCosmos Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
