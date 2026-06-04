import { Link } from 'react-router-dom';
import { Microscope, Twitter, Github, Mail } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Bacteria', path: '/explore' },
    { label: 'Viruses', path: '/explore' },
    { label: 'Fungi', path: '/explore' },
    { label: 'Protozoa', path: '/explore' },
  ],
  Discover: [
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Research', path: '/about' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00d4c8]/20 border border-[#00d4c8]/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-[#00d4c8]" />
              </div>
              <span className="text-lg font-bold text-slate-50">
                Micro<span className="text-[#00d4c8]">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that exists all around us — from the depths of the ocean to the surface of your skin.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#00d4c8] hover:border-[#00d4c8]/40 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#00d4c8] hover:border-[#00d4c8]/40 transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#00d4c8] hover:border-[#00d4c8]/40 transition">
                <Mail className="w-4 h-4" />
              </a>
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
                      className="text-slate-400 text-sm hover:text-[#00d4c8] transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Dedicated to the wonders of the microscopic world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
