const FooterSection = () => {
  const links = [
    { label: 'Biology', href: '#explore' },
    { label: 'Minerals', href: '#gallery' },
    { label: 'Insects', href: '#gallery' },
    { label: 'Water Life', href: '#gallery' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <footer className="bg-[#050a0f] border-t border-cyan-900/20 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-white mb-3">
              Micro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Cosmos</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that surrounds us — one microscopic wonder at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Did You Know?</h4>
            <blockquote className="border-l-2 border-cyan-500/50 pl-4">
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "The universe is not only stranger than we imagine, it is stranger than we can imagine."
              </p>
              <cite className="text-slate-600 text-xs mt-2 block">— J.B.S. Haldane</cite>
            </blockquote>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 MicroCosmos. Celebrating the invisible world.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-slate-600 text-xs">Exploring since the dawn of microscopy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
