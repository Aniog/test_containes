import { Link } from 'react-router-dom';
import { Microscope, Twitter, Github, Mail } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Bacteria', path: '/explore' },
    { label: 'Viruses', path: '/explore' },
    { label: 'Fungi', path: '/explore' },
    { label: 'Protozoa', path: '/explore' },
  ],
  Resources: [
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Research', path: '/about' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#050a0e] border-t border-cyan-900/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-display font-bold text-lg text-slate-50">
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Unveiling the hidden universe beneath the lens. Explore the extraordinary world of microorganisms that shape all life on Earth.
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

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-slate-50 font-semibold text-sm mb-4 font-display">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-900/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm font-mono">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Exploring the invisible world, one microbe at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
