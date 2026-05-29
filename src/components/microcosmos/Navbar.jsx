const navLinks = [
  { href: '#explore', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#organisms', label: 'Organisms' },
  { href: '#environments', label: 'Habitats' },
  { href: '#techniques', label: 'Imaging' },
  { href: '#spotlight', label: 'Marvels' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-bg/80 backdrop-blur-md border-b border-cosmos-elevated">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cosmos-teal to-cosmos-purple flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,212,170,0.5)] transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-cosmos-bg" />
          </div>
          <span className="font-grotesk font-bold text-cosmos-text text-lg tracking-wide">
            Micro<span className="text-cosmos-teal">Cosmos</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#explore"
          className="hidden md:block px-5 py-2 rounded-full border border-cosmos-teal/40 text-cosmos-teal font-grotesk text-sm font-medium hover:bg-cosmos-teal/10 hover:border-cosmos-teal transition-all duration-200"
        >
          Explore
        </a>
      </div>
    </nav>
  );
}
