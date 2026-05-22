const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#00d4aa] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,170,0.5)]">
            <div className="w-3 h-3 rounded-full bg-[#050d1a]" />
          </div>
          <span className="text-xl font-black text-[#e8f4f8] tracking-tight">
            Micro<span className="text-[#00d4aa]">Cosmos</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Explore', 'Gallery', 'Habitats', 'Techniques'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#94b8c8] hover:text-[#00d4aa] transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#gallery"
          className="px-5 py-2 bg-[#00d4aa]/10 border border-[#00d4aa]/40 text-[#00d4aa] text-sm font-medium rounded-full hover:bg-[#00d4aa]/20 transition-all duration-200"
        >
          View Gallery
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
