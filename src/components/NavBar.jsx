const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🌿</span>
        <span
          className="text-xl font-bold text-[#f5f0e8]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Animal World
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Gallery', 'Spotlight', 'Habitats', 'Facts'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#d4cfc5] hover:text-amber-400 transition-colors duration-200 text-sm font-medium"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#gallery"
        className="bg-amber-400 text-[#1a2e1a] font-bold px-5 py-2 rounded-full text-sm hover:bg-amber-300 transition-colors duration-200"
      >
        Explore
      </a>
    </div>
  </nav>
)

export default NavBar
