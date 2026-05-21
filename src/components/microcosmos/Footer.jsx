const Footer = () => (
  <footer className="bg-[#050a14] border-t border-cyan-500/10 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <div className="text-white font-black text-xl tracking-tight mb-1">
          Micro<span className="text-cyan-400">Cosmos</span>
        </div>
        <p className="text-slate-500 text-sm">Exploring the invisible universe.</p>
      </div>
      <div className="flex gap-8">
        {['About', 'Gallery', 'Worlds', 'Techniques'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
      <p className="text-slate-600 text-xs">© 2026 MicroCosmos. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
