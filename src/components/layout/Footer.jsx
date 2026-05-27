import { Link } from 'react-router-dom';
import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-microsurface border-t border-microborder mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-microteal" />
              <span className="font-display font-bold text-lg text-microtext">
                Micro<span className="text-microteal">Cosmos</span>
              </span>
            </Link>
            <p className="text-micromuted text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe beneath our feet — from bacteria to viruses,
              cells to crystals. Science made beautiful.
            </p>
            <div className="flex gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-microborder flex items-center justify-center text-microdim hover:text-microteal hover:border-microteal/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-microtext mb-4 text-sm uppercase tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/explore', label: 'Explore' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-micromuted text-sm hover:text-microteal transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-microtext mb-4 text-sm uppercase tracking-widest">
              Topics
            </h4>
            <ul className="space-y-3">
              {['Bacteria', 'Viruses', 'Cells', 'Fungi', 'Crystals', 'Parasites'].map((topic) => (
                <li key={topic}>
                  <Link
                    to="/explore"
                    className="text-micromuted text-sm hover:text-microteal transition-colors"
                  >
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-microborder mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-microdim text-xs">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
          <p className="text-microdim text-xs">
            Revealing the invisible world, one image at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
