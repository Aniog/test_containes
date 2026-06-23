const NAV_LINKS = [
  { href: "#hero", label: "Intro" },
  { href: "#gallery", label: "Gallery" },
  { href: "#realms", label: "Realms" },
  { href: "#mosaic", label: "Mosaic" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cosmos-bg/70 border-b border-cosmos-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-cosmos-accent via-cosmos-accent-2 to-cosmos-accent-3 shadow-[0_0_20px_rgba(125,249,198,0.5)] group-hover:scale-110 transition-transform duration-500" />
          <span className="font-display text-lg font-medium tracking-tight text-cosmos-text">
            Micro<span className="text-cosmos-accent">Cosmos</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cosmos-muted hover:text-cosmos-text transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cosmos-accent text-cosmos-bg hover:bg-cosmos-accent/90 transition-colors duration-300"
        >
          Get Updates
        </a>
      </div>
    </header>
  );
}
