const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span
            className="text-xl font-bold text-stone-800"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Animal Kingdom
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Animals', 'Habitats', 'Facts', 'Conservation'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-stone-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#conservation"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors duration-200"
        >
          Protect Wildlife
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
