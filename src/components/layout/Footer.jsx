import { Link } from 'react-router-dom';
import { Microscope, Twitter, Github, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Bacteria', to: '/explore' },
    { label: 'Viruses', to: '/explore' },
    { label: 'Cells', to: '/explore' },
    { label: 'Fungi', to: '/explore' },
  ],
  Resources: [
    { label: 'Gallery', to: '/gallery' },
    { label: 'About Us', to: '/about' },
    { label: 'Research', to: '/about' },
    { label: 'Contact', to: '/about' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-cosmos-navy border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cosmos-cyan" />
              </div>
              <span className="font-heading font-bold text-lg text-slate-50">
                Micro<span className="text-cosmos-cyan">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Unveiling the hidden universe beneath our feet — where life thrives at scales invisible to the naked eye.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-cosmos-dark border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-cosmos-cyan hover:border-cyan-400/40 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-cosmos-dark border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-cosmos-cyan hover:border-cyan-400/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-cosmos-dark border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-cosmos-cyan hover:border-cyan-400/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading font-semibold text-slate-50 text-sm mb-4 tracking-wide uppercase">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-400 text-sm hover:text-cosmos-cyan transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cyan-900/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Exploring the invisible world
            <ExternalLink className="w-3 h-3 ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
