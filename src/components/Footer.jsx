import { Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-cosmos-surface border-t border-cosmos-border py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="flex items-center gap-2">
        <Microscope className="w-5 h-5 text-cosmos-primary" />
        <span className="font-heading font-bold text-lg text-slate-50">
          Micro<span className="text-cosmos-primary">Cosmos</span>
        </span>
      </Link>
      <div className="flex gap-8">
        <Link to="/" className="font-body text-sm text-slate-400 hover:text-cosmos-primary transition-colors">Home</Link>
        <Link to="/explore" className="font-body text-sm text-slate-400 hover:text-cosmos-primary transition-colors">Explore</Link>
        <Link to="/about" className="font-body text-sm text-slate-400 hover:text-cosmos-primary transition-colors">About</Link>
      </div>
      <p className="font-body text-xs text-slate-600">
        © 2026 MicroCosmos. The invisible world, made visible.
      </p>
    </div>
  </footer>
);

export default Footer;
