import { Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Intro', href: '#intro' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Facts', href: '#facts' },
  { label: 'Gallery', href: '#gallery' },
];

const FooterSection = () => {
  return (
    <footer
      className="py-16 px-6 border-t border-cyan-500/10"
      style={{ background: '#030b18' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA Banner */}
        <div
          className="rounded-3xl p-10 md:p-14 mb-16 text-center relative overflow-hidden border border-cyan-500/20"
          style={{ background: 'radial-gradient(ellipse at center, #061428 0%, #030b18 80%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, #00d4ff 0%, transparent 50%), radial-gradient(circle at 80% 50%, #14b8a6 0%, transparent 50%)',
            }}
          />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-8 h-8 text-cyan-400" />
            </div>
            <h2
              className="font-space text-3xl md:text-4xl font-bold text-sky-50 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Universe is{' '}
              <span className="gradient-text">Smaller Than You Think</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Every surface, every drop of water, every breath of air is alive with
              microscopic wonders. The microcosmos is everywhere — you just need to look closer.
            </p>
            <a
              href="#intro"
              className="inline-block px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#030b18] font-semibold text-lg transition-all duration-300 glow-cyan"
            >
              Start Exploring
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <span
              className="text-xl font-bold text-sky-50"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Micro<span className="gradient-text">Cosmos</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Credit */}
          <p className="text-slate-600 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
