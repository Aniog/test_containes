import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cosmos-surface border-t border-cosmos-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cosmos-teal" />
              </div>
              <span className="text-cosmos-text font-bold text-lg">
                Micro<span className="text-cosmos-teal">Cosmos</span>
              </span>
            </Link>
            <p className="text-cosmos-muted text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe beneath our feet — where life is stranger, more beautiful, and more complex than we ever imagined.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-cosmos-border flex items-center justify-center text-cosmos-muted hover:text-cosmos-teal hover:border-cosmos-teal/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cosmos-text font-semibold text-sm mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'Explore', 'Science', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-cosmos-text font-semibold text-sm mb-4 uppercase tracking-widest">Topics</h4>
            <ul className="space-y-3">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Extremophiles'].map((item) => (
                <li key={item}>
                  <span className="text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cosmos-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cosmos-dim text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-dim text-sm">
            Designed to inspire curiosity about the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
