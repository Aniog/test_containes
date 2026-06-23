export default function Footer() {
  const links = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Categories', href: '#about' },
    { label: 'Facts', href: '#' },
    { label: 'About', href: '#about' },
  ];

  return (
    <footer className="bg-cosmos-bg border-t border-cosmos-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-cosmos-text">
              Micro<span className="text-cosmos-cyan">Cosmos</span>
            </h2>
            <p className="text-cosmos-muted text-sm mt-2 max-w-xs">
              Exploring the invisible universe that surrounds us every day.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cosmos-muted text-sm hover:text-cosmos-cyan transition-colors duration-200 uppercase tracking-widest font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-cosmos-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cosmos-muted text-xs">
            © {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-muted text-xs">
            Images captured via electron microscopy, confocal laser scanning, and polarized light.
          </p>
        </div>
      </div>
    </footer>
  );
}
