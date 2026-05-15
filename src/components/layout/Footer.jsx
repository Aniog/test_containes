import { Link } from 'react-router-dom';
import { Microscope, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Specimen Hub', to: '/specimens' },
      { label: 'Slide Gallery', to: '/gallery' },
      { label: 'Lab Notes', to: '/contact' },
    ],
  },
  {
    heading: 'Domains',
    links: [
      { label: 'Plant Histology', to: '/specimens#plant' },
      { label: 'Protists & Micro-Invertebrates', to: '/specimens#protists' },
      { label: 'Human Cytology', to: '/specimens#cytology' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Microscopy Techniques', to: '#' },
      { label: 'Staining Protocols', to: '#' },
      { label: 'Lab Safety Guidelines', to: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border-dim mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-bio-green/10 group-hover:bg-bio-green/20 transition-colors">
                <Microscope className="w-4 h-4 text-bio-green" />
              </div>
              <span className="text-text-primary font-semibold">MicroCosmos</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              An immersive educational platform bridging the gap between the visible world and the extraordinary universe hidden beneath the lens.
            </p>
            <div className="flex items-center gap-1">
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase mr-2">Magnification</span>
              {['100×', '400×', '1000×'].map((mag) => (
                <span key={mag} className="font-mono text-[10px] text-bio-green bg-bio-green/10 px-2 py-0.5 rounded-full">
                  {mag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-text-secondary text-sm hover:text-bio-green transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-dim flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © 2026 MicroCosmos Educational Platform. All specimens for academic use only.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-bio-green animate-pulse" />
            <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase ml-1">
              Lab Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
