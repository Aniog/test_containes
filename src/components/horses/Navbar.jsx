const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-playfair text-xl font-bold text-cream hover:text-hay transition-colors">
          🐎 The World of Horses
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'About', href: '#about' },
            { label: 'Breeds', href: '#breeds' },
            { label: 'Gallery', href: '#gallery' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-cream/80 hover:text-hay transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
