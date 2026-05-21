const NavBar = () => {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#worlds', label: 'Worlds' },
    { href: '#techniques', label: 'Techniques' },
    { href: '#featured', label: 'Featured' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a14]/80 backdrop-blur-md border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-black text-xl tracking-tight">
          Micro<span className="text-cyan-400">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#gallery"
          className="px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 text-sm font-semibold rounded-full transition-all duration-300"
        >
          Explore
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
