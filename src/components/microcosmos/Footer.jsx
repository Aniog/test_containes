import { Microscope, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Explore',
    links: ['Organisms', 'Gallery', 'Science', 'Timeline'],
  },
  {
    heading: 'Learn',
    links: ['Articles', 'Research', 'Glossary', 'FAQ'],
  },
  {
    heading: 'Community',
    links: ['Newsletter', 'Forum', 'Events', 'Contribute'],
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Github, label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050a0e] border-t border-cyan-900/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-slate-50 font-bold text-lg tracking-tight">
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Dedicated to exploring and celebrating the extraordinary world of microscopic life —
              making science beautiful and accessible to everyone.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.label}
                    aria-label={s.label}
                    className="w-9 h-9 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/10 rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-slate-400 hover:text-cyan-400" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-slate-300 font-semibold text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
