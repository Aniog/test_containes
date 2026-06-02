import { Link } from 'react-router-dom';
import { Microscope, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-teal-400" />
              </div>
              <span className="text-lg font-bold text-slate-100">
                Micro<span className="text-teal-400">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exploring the invisible world that surrounds us — from bacteria to viruses, from algae to archaea.
            </p>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Explore Gallery', path: '/explore' },
                { label: 'The Science', path: '/science' },
                { label: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-6">
              © {new Date().getFullYear()} MicroCosmos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
