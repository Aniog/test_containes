const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Categories', href: '#categories' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Facts', href: '#facts' },
]

export default function Footer() {
  return (
    <footer className="bg-cosmos-navy border-t border-cosmos-border">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-cosmos-cyan/10 via-cosmos-teal/10 to-cosmos-cyan/10 border-b border-cosmos-border py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
            The Universe Is Closer Than You Think
          </h2>
          <p className="text-cosmos-muted text-lg mb-8 max-w-xl mx-auto">
            Every surface, every breath, every drop of water contains an entire cosmos of life waiting to be discovered.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cosmos-cyan/10 border border-cosmos-cyan/30 text-cosmos-cyan text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cosmos-cyan animate-pulse" />
            Explore. Discover. Wonder.
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-cosmos-text mb-3">
              Micro<span className="text-cosmos-cyan">Cosmos</span>
            </div>
            <p className="text-cosmos-muted text-sm leading-relaxed">
              A visual journey into the invisible world that surrounds us — revealing the extraordinary beauty of life at the microscopic scale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-cosmos-text font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cosmos-muted text-sm hover:text-cosmos-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <div className="text-cosmos-text font-semibold mb-4 text-sm uppercase tracking-wider">
              Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {['Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae', 'Diatoms', 'Cells', 'Extremophiles', 'Pollen', 'Crystals'].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full text-xs bg-cosmos-card border border-cosmos-border text-cosmos-muted"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cosmos-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cosmos-dim text-sm">
            © 2026 MicroCosmos. A celebration of the invisible world.
          </p>
          <p className="text-cosmos-dim text-xs">
            Images captured via electron microscopy & fluorescence imaging
          </p>
        </div>
      </div>
    </footer>
  )
}
