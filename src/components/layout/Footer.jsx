import { NavLink } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#D9EDE8] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#3DBFA8] flex items-center justify-center">
                <Microscope className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-black text-[#2C3E50]">
                Micro<span className="text-[#3DBFA8]">Cosmos</span>
              </span>
            </div>
            <p className="text-[#7F8C8D] text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe beneath our feet — where life is stranger, more beautiful, and more vital than we ever imagined.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg bg-[#F5FAF8] border border-[#D9EDE8] flex items-center justify-center text-[#7F8C8D] hover:text-[#3DBFA8] hover:border-[#3DBFA8] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#2C3E50] uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Microorganisms' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-sm text-[#7F8C8D] hover:text-[#3DBFA8] transition-colors">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-xs font-bold text-[#2C3E50] uppercase tracking-widest mb-4">Topics</h4>
            <ul className="space-y-2.5">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Archaea', 'Algae'].map((topic) => (
                <li key={topic}>
                  <NavLink to="/explore" className="text-sm text-[#7F8C8D] hover:text-[#3DBFA8] transition-colors">
                    {topic}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#D9EDE8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#B2CFC8]">© 2026 MicroCosmos. All rights reserved.</p>
          <p className="text-xs text-[#B2CFC8]">Dedicated to science education and the wonder of the microscopic world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

