import { Link } from 'react-router-dom';
import { Microscope, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <Microscope className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-white font-bold text-lg">
              Micro<span className="text-cyan-400">Cosmos</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Exploring the invisible universe beneath our feet — one microorganism at a time.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2">
            {['Bacteria', 'Fungi', 'Protozoa', 'Viruses', 'Archaea'].map((item) => (
              <li key={item}>
                <Link to="/explore" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Site</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', to: '/' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'About', to: '/about' },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs">
          © 2026 MicroCosmos. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">
          Built with curiosity & science
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
