const Footer = () => {
  return (
    <footer className="bg-[#0a0f1e] border-t border-slate-800/60 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#050810]" />
            </div>
            <span
              className="text-white font-bold text-base"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Micro<span className="text-cyan-400">Cosmos</span>
            </span>
          </div>

          <p className="text-slate-500 text-sm text-center">
            Exploring the invisible universe — one micron at a time.
          </p>

          <div className="flex items-center gap-6">
            {['About', 'Research', 'Gallery', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 no-underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/60 text-center">
          <p className="text-slate-600 text-xs">
            © 2026 MicroCosmos. All microscopic rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
