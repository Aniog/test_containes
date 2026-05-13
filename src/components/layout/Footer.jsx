import { Link } from 'react-router-dom';
import { Microscope, Github, Mail, ExternalLink } from 'lucide-react';

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
      { label: 'Microscopy Techniques', path: '/gallery' },
      { label: 'Staining Protocols', path: '/specimens' },
      { label: 'Submit Observations', path: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#090D16] border-t border-slate-800/60">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <Microscope className="w-5 h-5 text-emerald-400" />
              <div className="flex flex-col leading-none">
                <span className="text-slate-100 font-semibold text-sm tracking-widest uppercase">
                  MicroCosmos
                </span>
                <span className="text-emerald-400 font-mono text-[9px] tracking-widest uppercase opacity-70">
                  The Microscopic World
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              An immersive educational platform bridging the gap between the visible and the invisible — designed for the next generation of biologists.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:lab@microcosmos.edu"
                className="text-slate-600 hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-emerald-400 transition-colors"
                aria-label="External"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 mb-5">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono tracking-wide">
            © 2026 MicroCosmos Educational Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">
              Lab Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
