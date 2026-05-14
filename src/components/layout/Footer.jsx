import { Link } from 'react-router-dom';
import { Microscope, Github, Mail, BookOpen } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Specimen Hub', path: '/specimens' },
      { label: 'Slide Gallery', path: '/gallery' },
      { label: 'Lab Notes', path: '/contact' },
    ],
  },
  {
    heading: 'Domains',
    links: [
      { label: 'Plant Histology', path: '/specimens#plant' },
      { label: 'Protists & Micro-Invertebrates', path: '/specimens#protists' },
      { label: 'Human Cytology', path: '/specimens#cytology' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Submit Observation', path: '/contact' },
      { label: 'Request a Slide', path: '/contact' },
      { label: 'Ask a Question', path: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-bio-green/50 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-bio-green" />
              </div>
              <span className="font-grotesk font-bold text-slate-100 text-lg">
                Micro<span className="text-bio-green">Cosmos</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm font-inter leading-relaxed mb-6">
              An educational microscopy platform bridging the gap between the visible and the invisible world of biology.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:lab@microcosmos.edu"
                className="w-8 h-8 rounded-lg bg-surface border border-subtle flex items-center justify-center text-slate-500 hover:text-bio-green hover:border-bio-green/30 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-surface border border-subtle flex items-center justify-center text-slate-500 hover:text-bio-green hover:border-bio-green/30 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-surface border border-subtle flex items-center justify-center text-slate-500 hover:text-bio-green hover:border-bio-green/30 transition-colors duration-200"
                aria-label="Resources"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h4 className="font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
                {section.heading}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-bio-green text-sm font-inter transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600">
            © 2026 MicroCosmos Educational Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bio-green animate-pulse" />
            <span className="font-mono text-xs text-slate-600">
              Laboratory Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
