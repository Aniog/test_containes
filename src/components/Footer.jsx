import { Link } from 'react-router-dom';
import { Microscope, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cosmos-navy border-t border-teal-900/30 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Microscope className="w-5 h-5 text-teal-400" />
            <span className="font-heading font-bold text-lg text-slate-100">
              Micro<span className="text-teal-400">Cosmos</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Exploring the invisible world that surrounds us — from bacteria to viruses, fungi to protozoa.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-slate-200 mb-4">Explore</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'Organisms', path: '/organisms' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Explore', path: '/explore' },
              { label: 'About', path: '/about' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-slate-200 mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Email" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
