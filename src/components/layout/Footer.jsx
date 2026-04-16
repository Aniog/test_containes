import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', path: '/product' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Changelog', path: '#' },
  ],
  Company: [
    { label: 'About', path: '/pricing' },
    { label: 'Blog', path: '#' },
    { label: 'Careers', path: '#' },
  ],
  Legal: [
    { label: 'Privacy', path: '#' },
    { label: 'Terms', path: '#' },
    { label: 'Security', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Dashed top border accent */}
      <div className="border-t border-dashed border-slate-700" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-slate-900" />
              </div>
              <span className="font-semibold text-white tracking-tight">Arcane<span className="text-slate-400">AI</span></span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Build stunning websites in minutes with the power of artificial intelligence. No code required.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 ArcaneAI. All rights reserved.</p>
          <p className="text-xs text-slate-600">Built with AI. Designed for humans.</p>
        </div>
      </div>
    </footer>
  );
}
