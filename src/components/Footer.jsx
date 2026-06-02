import { Link } from 'react-router-dom';
import { Microscope, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1a3a5c] mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                MicroCosmos
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible world beneath our feet — from bacteria to
              tardigrades, discover the microscopic life that shapes our planet.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Organisms' },
                { to: '/science', label: 'Science' },
                { to: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Topics</h4>
            <ul className="space-y-2">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Tardigrades', 'Algae'].map((topic) => (
                <li key={topic}>
                  <Link
                    to="/explore"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a3a5c] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Built with curiosity & science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
