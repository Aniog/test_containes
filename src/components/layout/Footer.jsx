import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-grotesk font-bold text-lg text-white">
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible world that surrounds us — from bacteria to plankton, from fungi to viruses. Science made beautiful.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-grotesk font-semibold text-white mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5">
              {['Bacteria', 'Viruses', 'Fungi', 'Plankton', 'Protozoa'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="font-grotesk font-semibold text-white mb-4 text-sm uppercase tracking-wider">Site</h4>
            <ul className="space-y-2.5">
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

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Dedicated to making science visible and beautiful.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
