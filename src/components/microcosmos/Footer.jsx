import { Microscope } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0d1a24] border-t border-[#1e3a4a] py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-extrabold text-xl">
          <Microscope className="w-6 h-6 text-[#00d4c8]" />
          <span>Micro<span className="text-[#00d4c8]">Cosmos</span></span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a href="#explore" className="hover:text-[#00d4c8] transition-colors">Explore</a>
          <a href="#gallery" className="hover:text-[#00d4c8] transition-colors">Gallery</a>
          <a href="#organisms" className="hover:text-[#00d4c8] transition-colors">Organisms</a>
          <a href="#science" className="hover:text-[#00d4c8] transition-colors">Science</a>
          <a href="#about" className="hover:text-[#00d4c8] transition-colors">About</a>
        </nav>
        <p className="text-slate-500 text-sm">
          © 2026 MicroCosmos. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
