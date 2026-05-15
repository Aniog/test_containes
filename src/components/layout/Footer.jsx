import { Link } from 'react-router-dom';
import { Microscope, Github, Mail, ExternalLink } from 'lucide-react';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Specimen Hub', path: '/specimens' },
  { label: 'Slide Gallery', path: '/gallery' },
  { label: 'Lab Notes', path: '/contact' },
];

const disciplines = [
  'Plant Histology',
  'Protistology',
  'Human Cytology',
  'Electron Microscopy',
  'Fluorescence Imaging',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="w-5 h-5 text-bio-green" strokeWidth={1.5} />
              <span className="font-grotesk font-semibold text-primary-text">MicroCosmos</span>
            </div>
            <p className="font-inter text-secondary-text text-sm leading-relaxed max-w-xs">
              An immersive educational platform bridging the gap between the visible and the invisible —
              revealing the extraordinary architecture of life at the cellular scale.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:lab@microcosmos.edu"
                className="flex items-center gap-2 text-muted-text hover:text-bio-green text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                lab@microcosmos.edu
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-inter text-sm text-secondary-text hover:text-bio-green transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-4">
              Disciplines
            </h4>
            <ul className="space-y-3">
              {disciplines.map((d) => (
                <li key={d} className="font-inter text-sm text-secondary-text">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-lab text-xs text-muted-text tracking-wide">
            © 2026 MicroCosmos Educational Platform. All micrographs are used for academic purposes.
          </p>
          <div className="flex items-center gap-2 text-muted-text text-xs font-mono-lab">
            <span className="w-2 h-2 bg-bio-green rounded-full animate-pulse" />
            <span>LIVE SPECIMEN DATABASE ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
