const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050810]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#050810]" />
          </div>
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Micro<span className="text-cyan-400">Cosmos</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Explore', 'Gallery', 'Specimens', 'Research'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 no-underline"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#explore"
          className="hidden md:block px-5 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium rounded-full hover:bg-cyan-400/20 transition-colors duration-200 no-underline"
        >
          Start Exploring
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
