const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-bg/80 backdrop-blur-md border-b border-cosmos-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-grotesk text-xl font-bold text-cosmos-text">
          Micro<span className="text-cosmos-cyan">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Explore', 'Gallery', 'Ecosystems', 'History'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-inter text-sm text-cosmos-muted hover:text-cosmos-text transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#gallery"
          className="px-4 py-2 border border-cosmos-cyan/40 text-cosmos-cyan font-inter text-sm rounded-full hover:bg-cosmos-cyan/10 transition-all duration-200"
        >
          View Gallery
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
