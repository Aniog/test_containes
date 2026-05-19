const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#worlds', label: 'Worlds' },
  { href: '#technology', label: 'Technology' },
  { href: '#spotlight', label: 'Spotlight' },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a14]/80 backdrop-blur-md border-b border-cyan-900/30">
    <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
      <a href="#" className="text-white font-extrabold text-xl tracking-tight">
        Micro<span className="text-cyan-400">Cosmos</span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#gallery"
        className="hidden md:block px-5 py-2 bg-cyan-400/10 border border-cyan-400/40 text-cyan-400 text-sm font-semibold rounded-full hover:bg-cyan-400/20 transition-all duration-300"
      >
        Explore
      </a>
    </div>
  </nav>
);

export default Navbar;
