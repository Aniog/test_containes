import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter, Mail, Star, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Home', path: '/' },
    { label: 'Knowledge Hub', path: '/knowledge' },
    { label: 'Sky Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ],
  Topics: [
    { label: 'Constellations', path: '/knowledge#constellations' },
    { label: 'Stellar Evolution', path: '/knowledge#stellar-evolution' },
    { label: 'Wavelengths', path: '/knowledge#wavelengths' },
    { label: 'Auroras & Eclipses', path: '/gallery' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-[#1F2937]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                <Telescope className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-white font-light">Starry Night <span className="text-amber-400">&</span> Astronomy</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              An educational journey through the cosmos. Designed for physics students who dare to look up and ask why.
            </p>
            <div className="flex items-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-400/60 fill-amber-400/60" />
              ))}
              <span className="text-gray-600 text-xs ml-2">For curious minds</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Starry Night & Astronomy. Built for physics education.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Light travels at 299,792,458 m/s</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
