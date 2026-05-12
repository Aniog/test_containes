import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-[#1e2a4a] py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Telescope className="w-5 h-5 text-[#f5c842]" />
              <span className="font-serif text-lg text-[#f0f4ff]">Starry Night</span>
            </div>
            <p className="text-sm text-[#8892b0] leading-relaxed max-w-xs">
              An educational astronomy resource for physics students. Explore the
              cosmos, understand the physics, and ask your questions.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#4a5568] mb-4">Pages</p>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/knowledge', label: 'Knowledge Hub' },
                { to: '/gallery', label: 'Sky Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-[#8892b0] hover:text-[#f0f4ff] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#4a5568] mb-4">Topics</p>
            <ul className="space-y-2.5">
              {[
                { to: '/knowledge#constellations', label: 'Constellations' },
                { to: '/knowledge#stellar-evolution', label: 'Stellar Evolution' },
                { to: '/knowledge#observational', label: 'Observational Physics' },
                { to: '/gallery', label: 'Auroras & Eclipses' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-[#8892b0] hover:text-[#f0f4ff] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2a4a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4a5568]">
            © {new Date().getFullYear()} Starry Night — Educational Astronomy Resource
          </p>
          <p className="text-xs text-[#4a5568] font-mono">
            "The cosmos is within us. We are made of star-stuff." — Carl Sagan
          </p>
        </div>
      </div>
    </footer>
  );
}
