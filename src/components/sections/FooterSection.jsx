const FooterSection = () => {
  const navLinks = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Organisms', href: '#organisms' },
    { label: 'Microscopy', href: '#microscopy' },
    { label: 'Ecosystems', href: '#ecosystems' },
    { label: 'Facts', href: '#facts' },
  ];

  return (
    <footer className="bg-cosmos-surface border-t border-cosmos-teal/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-cosmos-text">
              Micro<span className="text-cosmos-teal">Cosmos</span>
            </div>
            <p className="text-cosmos-muted text-sm mt-2 max-w-xs">
              Exploring the invisible universe that sustains all life on Earth.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cosmos-muted hover:text-cosmos-teal transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-cosmos-teal/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cosmos-muted text-xs">
            © 2026 MicroCosmos. A journey into the invisible world.
          </p>
          <p className="text-cosmos-muted text-xs">
            Images captured via electron & fluorescence microscopy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
