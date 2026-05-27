import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Discover: [
    { label: 'Home', to: '/' },
    { label: 'Explore', to: '/explore' },
    { label: 'Science', to: '/science' },
    { label: 'Gallery', to: '/gallery' },
  ],
  Learn: [
    { label: 'Bacteria', to: '/explore' },
    { label: 'Viruses', to: '/explore' },
    { label: 'Fungi', to: '/explore' },
    { label: 'Protozoa', to: '/explore' },
  ],
  About: [
    { label: 'Our Mission', to: '/about' },
    { label: 'The Team', to: '/about' },
    { label: 'Contact', to: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-teal-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                MicroCosmos
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that surrounds us — from the depths of the ocean to the surface of your skin.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-slate-100 font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with curiosity &amp; science
          </p>
        </div>
      </div>
    </footer>
  );
}
