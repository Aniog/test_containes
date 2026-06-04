import { Link } from 'react-router-dom';
import { Microscope, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Bacteria', path: '/explore' },
    { label: 'Viruses', path: '/explore' },
    { label: 'Cells', path: '/explore' },
    { label: 'Fungi', path: '/explore' },
  ],
  Discover: [
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Research', path: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cosmos-navy border-t border-cyan-900/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <Microscope className="w-6 h-6 text-cyan-400" />
              <span className="font-heading font-bold text-lg text-slate-50">
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Unveiling the hidden universe beneath our feet — a journey into the microscopic world that shapes all life on Earth.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-slate-200 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cyan-900/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Exploring the invisible world
            <ExternalLink className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}
