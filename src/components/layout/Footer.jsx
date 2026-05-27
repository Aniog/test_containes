import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1f35] border-t border-[rgba(0,212,255,0.1)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-[#00d4ff]" />
              </div>
              <span className="text-lg font-black text-[#e8f4f8]">
                Micro<span className="text-[#00d4ff]">Cosmos</span>
              </span>
            </Link>
            <p className="text-[#8ab4c8] text-sm leading-relaxed max-w-xs">
              Unveiling the invisible universe that surrounds us — one microorganism at a time.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#112540] border border-[rgba(0,212,255,0.15)] flex items-center justify-center text-[#8ab4c8] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[#e8f4f8] font-semibold mb-4 text-sm tracking-widest uppercase">Explore</h4>
            <ul className="space-y-3">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Archaea'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="text-[#8ab4c8] text-sm hover:text-[#00d4ff] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#e8f4f8] font-semibold mb-4 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Science', path: '/science' },
                { label: 'Research', path: '/science' },
                { label: 'Contact', path: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[#8ab4c8] text-sm hover:text-[#00d4ff] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(0,212,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4a7a94] text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-[#4a7a94] text-sm">
            Exploring the invisible world of science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
