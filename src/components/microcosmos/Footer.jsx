const Footer = () => (
  <footer className="bg-[#050a14] border-t border-cyan-900/30 py-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-white font-extrabold text-lg tracking-tight">
        Micro<span className="text-cyan-400">Cosmos</span>
      </div>
      <p className="text-slate-500 text-sm text-center">
        Exploring the invisible universe — one micron at a time.
      </p>
      <p className="text-slate-600 text-xs">
        © {new Date().getFullYear()} MicroCosmos. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
