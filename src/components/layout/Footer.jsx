import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-teal-400" />
              </div>
              <span className="text-teal-400 font-bold text-lg">
                Micro<span className="text-slate-100">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe beneath our feet — where life is stranger, more beautiful, and more complex than we ever imagined.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Explore Gallery', path: '/explore' },
                { label: 'Science Articles', path: '/science' },
                { label: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-4 uppercase tracking-wider">Topics</h4>
            <ul className="space-y-2.5">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae', 'Extremophiles'].map((topic) => (
                <li key={topic}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Dedicated to the wonders of the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
