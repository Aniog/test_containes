import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter, Mail, Star } from 'lucide-react';

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Knowledge Hub', path: '/knowledge' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Topics',
    links: [
      { label: 'Constellations', path: '/knowledge#constellations' },
      { label: 'Stellar Evolution', path: '/knowledge#stellar-evolution' },
      { label: 'Observational Physics', path: '/knowledge#observational' },
      { label: 'Deep Sky Objects', path: '/gallery' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-subtle">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center group-hover:bg-amber/20 transition-all duration-300">
                <Telescope className="w-4 h-4 text-amber" />
              </div>
              <span className="font-serif text-xl font-light text-star tracking-wide">
                Starry Night
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              An educational journey through the cosmos — designed for curious minds and physics students who dare to look up.
            </p>
            <div className="flex items-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 text-amber/60 fill-amber/60"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
              <span className="text-xs text-dim ml-2 tracking-widest uppercase">
                Physics Education
              </span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-amber mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted hover:text-star transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dim text-center md:text-left">
            © {new Date().getFullYear()} The Starry Night — Astronomy Education. Crafted for curious minds.
          </p>
          <p className="text-xs text-dim italic font-serif">
            "The cosmos is within us. We are made of star-stuff." — Carl Sagan
          </p>
        </div>
      </div>
    </footer>
  );
}
