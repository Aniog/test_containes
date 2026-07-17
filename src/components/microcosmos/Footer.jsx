import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cosmos-deep border-t border-cosmos-cyan/10 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-cosmos-cyan" />
              <span className="text-white font-black text-xl tracking-tight">
                Micro<span className="text-cosmos-cyan">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated to revealing the extraordinary beauty and complexity of
              the microscopic world. Science, wonder, and discovery — one image
              at a time.
            </p>
            <div className="flex gap-4 mt-6">
              {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-cosmos-cyan/20 flex items-center justify-center text-slate-400 hover:text-cosmos-cyan hover:border-cosmos-cyan/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {['Gallery', 'Worlds', 'Science', 'Discoveries', 'Timeline'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cosmos-cyan text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Learn
            </h4>
            <ul className="space-y-2.5">
              {['Microscopy Basics', 'Cell Biology', 'Microbiology', 'Nanotechnology', 'Research'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cosmos-cyan text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cosmos-cyan/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Exploring the invisible universe, one discovery at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
