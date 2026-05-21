import { Link } from 'react-router-dom';
import { Microscope, Github } from 'lucide-react';

const LINKS = [
  { label: 'Observatory',   path: '/' },
  { label: 'Specimen Hub',  path: '/specimens' },
  { label: 'Slide Gallery', path: '/gallery' },
  { label: 'Lab Notes',     path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-ink text-white py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-lg font-semibold">MicroCosmos</span>
            </div>
            <p className="font-sans text-sm text-white/55 leading-relaxed max-w-xs">
              An educational microscopy platform dedicated to the systematic study
              of the invisible world. Est. 1892.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-sans tracking-widest uppercase text-white/40 mb-4">Navigation</p>
            <ul className="space-y-2">
              {LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="font-sans text-sm text-white/65 hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Citation */}
          <div>
            <p className="text-xs font-sans tracking-widest uppercase text-white/40 mb-4">Academic Citation</p>
            <p className="font-mono text-xs text-white/50 leading-relaxed">
              MicroCosmos Educational Platform (2026).<br />
              <em>The Microscopic World: A Digital Archive.</em><br />
              Department of Biology, v2.0.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/35">
            © 2026 MicroCosmos. For educational use only. All micrographs are public domain.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-white/30">v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
