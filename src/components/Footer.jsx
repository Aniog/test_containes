import { Microscope, Github, Twitter, Instagram } from 'lucide-react';

const links = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#' },
  { label: 'Facts', href: '#' },
];

const topics = [
  'Bacteria', 'Viruses', 'Cells', 'Crystals',
  'Insects', 'Algae', 'Fungi', 'Minerals',
];

export default function Footer() {
  return (
    <footer className="bg-cosmos-deep border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                Micro<span className="text-cyan-400">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Exploring the hidden universe that exists beyond the limits of the naked eye. Every image tells the story of a world we rarely see.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white font-semibold mb-4">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-cyan-400/30 hover:text-cyan-400 cursor-pointer transition-all duration-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Images captured via electron microscopy, fluorescence imaging & polarized light photography.
          </p>
        </div>
      </div>
    </footer>
  );
}
