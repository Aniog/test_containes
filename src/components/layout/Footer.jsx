import { NavLink } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-[#00e5ff]/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-[#00e5ff]" />
              </div>
              <span className="text-lg font-black text-white">
                Micro<span className="text-[#00e5ff]">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe beneath our feet — where life is stranger, more beautiful, and more vital than we ever imagined.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#0a1628] border border-[#00e5ff]/10 flex items-center justify-center text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Microorganisms' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-[#00e5ff] transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Topics</h4>
            <ul className="space-y-3">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Archaea', 'Algae'].map((topic) => (
                <li key={topic}>
                  <NavLink
                    to="/explore"
                    className="text-sm text-slate-400 hover:text-[#00e5ff] transition-colors"
                  >
                    {topic}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#00e5ff]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Dedicated to science education and the wonder of the microscopic world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
