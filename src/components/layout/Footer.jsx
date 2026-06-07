import { Link } from 'react-router-dom';
import { Microscope, Twitter, Github, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Bacteria', path: '/explore' },
    { label: 'Viruses', path: '/explore' },
    { label: 'Fungi', path: '/explore' },
    { label: 'Protozoa', path: '/explore' },
  ],
  Learn: [
    { label: 'Science Articles', path: '/science' },
    { label: 'Research', path: '/science' },
    { label: 'Discoveries', path: '/science' },
    { label: 'About Us', path: '/about' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-teal-400" />
              </div>
              <span className="font-grotesk font-bold text-lg text-slate-100">MicroCosmos</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible world that surrounds us — from the bacteria in your gut to the viruses that shaped evolution.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-grotesk font-semibold text-slate-100 mb-4 text-sm uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
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
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with curiosity & science
            <ExternalLink className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
