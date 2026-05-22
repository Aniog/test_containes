const Footer = () => (
  <footer className="bg-[#050a0f] border-t border-slate-800 py-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-2xl font-extrabold text-white mb-2">
            Micro<span className="text-cyan-400">Cosmos</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Revealing the extraordinary beauty of the world too small to see.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          {['About', 'Gallery', 'Worlds', 'Techniques', 'Specimens'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-slate-800 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} MicroCosmos. All rights reserved. Exploring the invisible universe.
      </div>
    </div>
  </footer>
);

export default Footer;
