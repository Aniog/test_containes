import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] border-t border-[#00d4ff]/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <span className="font-grotesk font-bold text-xl text-[#f0f8ff]">
                Micro<span className="text-[#00d4ff]">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible world beneath our feet — from bacteria to viruses, 
              fungi to protozoa. Science made beautiful.
            </p>
            <div className="flex gap-4 mt-5">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#0f1f3d] border border-[#00d4ff]/20 flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-grotesk font-semibold text-[#f0f8ff] mb-4 text-sm uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Organisms', path: '/organisms' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Science', path: '/science' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-grotesk font-semibold text-[#f0f8ff] mb-4 text-sm uppercase tracking-widest">
              Topics
            </h4>
            <ul className="space-y-2">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae', 'Archaea'].map((topic) => (
                <li key={topic}>
                  <a href="#" className="text-slate-400 hover:text-[#00d4ff] text-sm transition-colors">
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00d4ff]/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Dedicated to the beauty of the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
