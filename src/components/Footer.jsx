import { Link } from 'react-router-dom';
import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cosmos-card border-t border-cosmos-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-cosmos-cyan" />
              <span className="font-heading font-bold text-lg text-cosmos-text">
                Micro<span className="text-cosmos-cyan">Cosmos</span>
              </span>
            </Link>
            <p className="font-body text-cosmos-muted text-sm leading-relaxed">
              Revealing the extraordinary beauty of the invisible world through science and imagery.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-cosmos-text text-sm mb-4 tracking-wide uppercase">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Organisms', path: '/explore' },
                { label: 'About', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-body text-cosmos-muted text-sm hover:text-cosmos-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-cosmos-text text-sm mb-4 tracking-wide uppercase">Science</h4>
            <ul className="space-y-2">
              {['Bacteria', 'Protozoa', 'Algae & Diatoms', 'Micro-Animals', 'Fungi & Spores'].map((item) => (
                <li key={item}>
                  <Link to="/explore" className="font-body text-cosmos-muted text-sm hover:text-cosmos-cyan transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-cosmos-border pt-6 text-center">
          <p className="font-body text-cosmos-muted text-xs">
            © 2026 MicroCosmos. Exploring the invisible universe.
          </p>
        </div>
      </div>
    </footer>
  );
}
