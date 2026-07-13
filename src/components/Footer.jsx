const Footer = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Organisms', href: '#organisms' },
    { label: 'Facts', href: '#facts' },
    { label: 'Explore', href: '#explore' },
  ];

  return (
    <footer className="relative bg-cosmos-navy border-t border-cosmos-border overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="footer-bg-mcnp2q"
        data-strk-bg="[footer-tagline-mcnp2q] [footer-title-mcnp2q]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        className="absolute inset-0 bg-cover bg-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-navy/80 to-cosmos-black/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <h2 id="footer-title-mcnp2q" className="font-display font-bold text-3xl text-cosmos-text mb-3">
              Micro<span className="text-cosmos-teal italic">Cosmos</span>
            </h2>
            <p id="footer-tagline-mcnp2q" className="text-cosmos-secondary text-sm leading-relaxed">
              Exploring the invisible universe that surrounds us — one microorganism at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cosmos-secondary hover:text-cosmos-teal transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-cosmos-border mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cosmos-muted text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-muted text-xs">
            Celebrating the beauty of the microscopic world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
