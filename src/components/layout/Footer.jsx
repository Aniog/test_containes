import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter, Mail, Star } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Knowledge Hub', path: '/knowledge' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Topics',
    links: [
      { label: 'Constellations', path: '/knowledge/constellations' },
      { label: 'Stellar Evolution', path: '/knowledge/stellar-evolution' },
      { label: 'Observational Physics', path: '/knowledge/observational-physics' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-space-900 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <Telescope className="w-5 h-5 text-amber-400" />
              <span className="font-serif text-lg font-light text-star-silver">Starry Night</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              An educational journey through the cosmos — designed for curious minds
              and aspiring physicists. Explore the universe, one concept at a time.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-400/60 fill-amber-400/60" />
              ))}
              <span className="text-xs text-slate-500 ml-2 font-mono">Physics · Astronomy · Wonder</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h4 className="section-label mb-4">{section.heading}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Starry Night — Educational Resource for Physics Students
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:teacher@school.edu"
              className="text-slate-500 hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
