const Footer = () => (
  <footer className="bg-[#050d1a] border-t border-cyan-500/10 py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔬</span>
          <span className="text-xl font-black tracking-tight text-sky-50">
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          Exploring the hidden universe beneath our feet — one microbe at a time.
        </p>
        <div className="flex gap-6">
          {['Home', 'Gallery', 'Science', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-500 hover:text-cyan-400 text-sm transition-colors no-underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-cyan-500/10 text-center text-slate-600 text-xs">
        © 2026 MicroCosmos. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
