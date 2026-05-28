import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cosmos-surface border-t border-cosmos-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/40 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-cosmos-teal" />
              </div>
              <span className="font-heading font-bold text-xl text-[#f0f9ff]">
                Micro<span className="text-cosmos-teal">Cosmos</span>
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Exploring the invisible world beneath our feet — from single-celled wonders to complex microscopic ecosystems.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-cosmos-card border border-cosmos-border flex items-center justify-center text-[#94a3b8] hover:text-cosmos-teal hover:border-cosmos-teal/40 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-semibold text-[#f0f9ff] mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Bacteria', 'Fungi', 'Plankton', 'Viruses', 'Protozoa'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="text-[#94a3b8] text-sm hover:text-cosmos-teal transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-[#f0f9ff] mb-4">Pages</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/science', label: 'Science' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/subscribe', label: 'Subscribe' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-[#94a3b8] text-sm hover:text-cosmos-teal transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cosmos-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-[#475569] text-sm">
            Designed to inspire curiosity about the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
