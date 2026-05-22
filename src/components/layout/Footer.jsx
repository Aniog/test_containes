import { Link } from 'react-router-dom';
import { Microscope, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030a14] border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-teal-400" />
            <span className="text-white font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Micro<span className="text-teal-400">Cosmos</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link to="/explore" className="hover:text-teal-400 transition-colors">Explore</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
          © 2026 MicroCosmos. Exploring the invisible universe.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
