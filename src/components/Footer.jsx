import React from 'react';

const Footer = () => (
  <footer className="bg-[#050d1a] border-t border-slate-800 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span className="text-xl font-black tracking-tight text-slate-50">
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </span>
        <p className="text-slate-500 text-sm mt-1">
          Revealing the universe beneath the lens.
        </p>
      </div>
      <nav className="flex flex-wrap gap-6 justify-center">
        {['Explore', 'Gallery', 'Specimens', 'Ecosystem', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-slate-500 hover:text-[#00d4c8] transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </nav>
      <p className="text-slate-600 text-xs">
        © {new Date().getFullYear()} MicroCosmos. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
