import { Link } from 'react-router-dom';
import { Telescope, Github, Twitter, Mail, Star, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Home',          to: '/' },
      { label: 'Knowledge Hub', to: '/knowledge' },
      { label: 'Gallery',       to: '/gallery' },
      { label: 'Contact',       to: '/contact' },
    ],
  },
  {
    title: 'Topics',
    links: [
      { label: 'Constellations & Coordinates', to: '/knowledge#coordinates' },
      { label: 'Stellar Evolution',            to: '/knowledge#stellar-evolution' },
      { label: 'Observational Physics',        to: '/knowledge#observational' },
      { label: 'Deep Sky Objects',             to: '/gallery' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cosmos-deep border-t border-cosmos-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-glow/10 border border-amber-glow/30 flex items-center justify-center">
                <Telescope className="w-5 h-5 text-amber-glow" />
              </div>
              <div>
                <div className="font-display font-bold text-star-white">Starry Night</div>
                <div className="text-xs text-cosmos-subtle uppercase tracking-widest">Physics of the Cosmos</div>
              </div>
            </div>
            <p className="text-cosmos-subtle text-sm leading-relaxed max-w-xs">
              An immersive educational resource for Physics students — exploring the universe through the lens of science, mathematics, and wonder.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:teacher@school.edu"
                className="w-9 h-9 rounded-lg border border-cosmos-border flex items-center justify-center text-cosmos-subtle hover:text-amber-glow hover:border-amber-glow/40 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-cosmos-border flex items-center justify-center text-cosmos-subtle hover:text-amber-glow hover:border-amber-glow/40 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-cosmos-border flex items-center justify-center text-cosmos-subtle hover:text-amber-glow hover:border-amber-glow/40 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-glow mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cosmos-subtle hover:text-cosmos-text transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cosmos-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cosmos-subtle">
            © {new Date().getFullYear()} Starry Night — Physics of the Cosmos. Educational resource for classroom use.
          </p>
          <div className="flex items-center gap-2 text-xs text-cosmos-subtle">
            <Star className="w-3 h-3 text-amber-glow" />
            <span>Designed for curious minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
