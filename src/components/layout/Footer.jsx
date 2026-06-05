import { Link } from 'react-router-dom';
import { Microscope, Twitter, Youtube, Github } from 'lucide-react';

const footerLinks = {
  Discover: [
    { label: 'Home', path: '/' },
    { label: 'Explore Organisms', path: '/explore' },
    { label: 'Science Articles', path: '/science' },
    { label: 'About Us', path: '/about' },
  ],
  Topics: [
    { label: 'Bacteria', path: '/explore' },
    { label: 'Viruses', path: '/explore' },
    { label: 'Protozoa', path: '/explore' },
    { label: 'Fungi', path: '/explore' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-slate-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-lg font-bold text-slate-50" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that surrounds us — from the depths of the ocean to the surface of your skin.
            </p>
            <div className="flex gap-4 mt-6">
              {[Twitter, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-slate-50 font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2">
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

        <div className="border-t border-slate-700/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built with curiosity and science.
          </p>
        </div>
      </div>
    </footer>
  );
}
