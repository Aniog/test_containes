const FooterSection = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Worlds', href: '#worlds' },
    { label: 'Organisms', href: '#organisms' },
  ];

  const topics = [
    'Microbiology', 'Cell Biology', 'Virology', 'Mycology',
    'Protistology', 'Aerobiology', 'Astrobiology', 'Electron Microscopy',
  ];

  return (
    <footer className="bg-[#050d1a] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-cosmos-teal" />
              </div>
              <span className="font-display text-xl font-bold text-white">MicroCosmos</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that surrounds us — one microbe at a time.
              Science, wonder, and the beauty of the very small.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cosmos-teal transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs hover:border-cosmos-teal/40 hover:text-cosmos-teal transition-colors duration-200 cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 MicroCosmos. Dedicated to the wonder of the invisible world.
          </p>
          <p className="text-slate-600 text-xs">
            Images captured via electron microscopy & fluorescence imaging
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
