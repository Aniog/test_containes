import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#00d4aa]/20 border border-[#00d4aa]/40 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-[#00d4aa]" />
              </div>
              <span className="text-xl font-bold text-white">
                Micro<span className="text-[#00d4aa]">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe beneath our feet — from bacteria to viruses, 
              from cells to spores. Science made beautiful.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#0f1f38] border border-[#1e3a5f] flex items-center justify-center text-slate-400 hover:text-[#00d4aa] hover:border-[#00d4aa]/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              {['Bacteria', 'Viruses', 'Fungi', 'Algae', 'Protozoa'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="text-slate-400 text-sm hover:text-[#00d4aa] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Explore', path: '/explore' },
                { label: 'About', path: '/about' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 text-sm hover:text-[#00d4aa] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e3a5f] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Revealing the beauty of the invisible world
          </p>
        </div>
      </div>
    </footer>
  );
}
