const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#worlds', label: 'Worlds' },
  { href: '#techniques', label: 'Techniques' },
  { href: '#mosaic', label: 'Specimens' },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a0f]/80 backdrop-blur-md border-b border-slate-800/50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
      <a href="#" className="text-xl font-extrabold text-white tracking-tight">
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
        href="#mosaic"
        className="hidden md:inline-flex px-5 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold rounded-full hover:bg-cyan-400/20 transition-all duration-200"
      >
        Explore
      </a>
    </div>
  </nav>
);

export default Navbar;
